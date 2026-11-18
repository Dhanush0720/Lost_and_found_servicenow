/**
 * Auto-Sync Bridge: Listens for incoming WhatsApp messages on Open-WA
 * and automatically forwards them to ServiceNow Inbound Webhook.
 */
const https = require('https');
const http = require('http');

const OPENWA_URL = 'http://localhost:8080';
const SERVICENOW_URL = 'https://dev440058.service-now.com/api/x_1526023_lost_and/whatsapp/inbound';

console.log('🔄 WhatsApp to ServiceNow Live Sync Bridge started.');
console.log('Watching for incoming messages on ' + OPENWA_URL + '...');

const processedMsgIds = new Set();

async function checkMessages() {
    try {
        const chatsRes = await fetchJson(`${OPENWA_URL}/api/chats/getAll`);
        if (!chatsRes || !chatsRes.data) return;

        for (const chat of chatsRes.data) {
            // Check chats that have unread messages or recent messages
            if (chat.unreadCount > 0 || (chat.lastReceivedKey && !processedMsgIds.has(chat.lastReceivedKey.id))) {
                const chatId = chat.id;
                const msgsRes = await fetchJson(`${OPENWA_URL}/api/messages/getAll?chatId=${encodeURIComponent(chatId)}`);
                if (!msgsRes || !msgsRes.data || !Array.isArray(msgsRes.data)) continue;

                for (const msg of msgsRes.data) {
                    if (msg.fromMe) continue; // Skip own outgoing messages
                    if (processedMsgIds.has(msg.id)) continue;

                    processedMsgIds.add(msg.id);
                    console.log(`\n📩 New WhatsApp Message from ${chat.formattedTitle || msg.from}:`);
                    console.log(`"${msg.body}"`);

                    // Forward to ServiceNow Webhook
                    const payload = {
                        from: (chat.contact && chat.contact.phoneNumber) ? chat.contact.phoneNumber : msg.from,
                        sender: {
                            pushname: (chat.contact && chat.contact.pushname) ? chat.contact.pushname : chat.formattedTitle
                        },
                        body: msg.body
                    };

                    const snResponse = await postToServiceNow(payload);
                    console.log(`✅ ServiceNow Response:`, snResponse);

                    // Mark as read in WhatsApp
                    try {
                        await fetchJson(`${OPENWA_URL}/api/chats/markAsRead?chatId=${encodeURIComponent(chatId)}`);
                    } catch(e) {}
                }
            }
        }
    } catch (err) {
        // Silently retry
    }
}

function fetchJson(url) {
    return new Promise((resolve) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
            });
        }).on('error', () => resolve(null));
    });
}

function postToServiceNow(payload) {
    return new Promise((resolve) => {
        const dataStr = JSON.stringify(payload);
        const urlObj = new URL(SERVICENOW_URL);
        const options = {
            hostname: urlObj.hostname,
            port: 443,
            path: urlObj.pathname,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(dataStr)
            }
        };

        const req = https.request(options, (res) => {
            let resData = '';
            res.on('data', chunk => resData += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(resData)); } catch (e) { resolve(resData); }
            });
        });
        req.on('error', (e) => resolve({ error: e.message }));
        req.write(dataStr);
        req.end();
    });
}

// Poll every 3 seconds
setInterval(checkMessages, 3000);
checkMessages();
