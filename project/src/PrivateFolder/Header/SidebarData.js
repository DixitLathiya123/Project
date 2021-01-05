import React from 'react'
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
export const SidebarData = () => [
    {
        title: '',
        path: '',
    },
    {
        title: 'Dashbord',
        path: '/dashbord',
        icon: <PieChartOutlined/>,
    },
    {
        title: 'All Blog',
        path: '/allBlog',
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