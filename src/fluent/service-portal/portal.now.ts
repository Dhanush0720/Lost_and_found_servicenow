import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { lostFoundHomePage } from './sp-page/home-page.now'

export const lostFoundPortal = ServicePortal({
    $id: Now.ID['portal_lost_found'],
    title: 'RCE Lost & Found',
    urlSuffix: 'rce_lost_found',
    theme: '281507c44317d210ca4c1f425db8f2fd', // OOTB Coral Theme
    homePage: lostFoundHomePage,
})
