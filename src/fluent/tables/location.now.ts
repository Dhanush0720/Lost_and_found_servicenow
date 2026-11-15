import '@servicenow/sdk/global'
import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_1526023_lost_and_location = Table({
    name: 'x_1526023_lost_and_location',
    label: 'Location',
    isExtensible: false,
    allowWebServiceAccess: true,
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 100,
        }),
        building: StringColumn({
            label: 'Building',
            maxLength: 100,
        }),
        campus_zone: StringColumn({
            label: 'Campus zone',
            maxLength: 100,
        }),
    },
})

