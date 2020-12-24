import React from 'react'

import {
    DesktopOutlined,
    PieChartOutlined,

} from '@ant-design/icons';

export const SidebarData = () => [
    {
        title: 'Dashbord',
        path: '/dash',
        icon: <PieChartOutlined/>,
    },
    {
        title: 'Profile',
        path: '/update',
        icon: <DesktopOutlined/>,
    },
    {
        title: 'Table',
        path: '/table',
        icon: <DesktopOutlined/>,
    },
]