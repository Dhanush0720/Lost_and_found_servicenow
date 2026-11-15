import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { lostFoundMainWidget } from '../sp-widget/lost-found-portal/widget.now'

export const lostFoundHomePage = SPPage({
    pageId: 'x_1526023_lost_and_portal_home',
    title: 'Lost and Found - Ramachandra College of Engineering',
    category: 'custom',
    public: false,
    draft: false,
    containers: [
        {
            $id: Now.ID['container_lost_found_main'],
            name: 'Portal Main Container',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['row_lost_found_main'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['col_lost_found_main'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['inst_lost_found_main'],
                                    widget: lostFoundMainWidget,
                                    order: 100,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
