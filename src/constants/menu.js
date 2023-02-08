import { lazy } from 'react';
import { routePath } from '~/routing/pathRouting';

const ListMenu = [
    {
        path: routePath.HomePage,
        element: lazy(() => import('~/pages/HomePage/HomePage')),
        icons: '',
        name: 'Sản phẩm',
    },
    {
        path: routePath.HomePage,
        element: lazy(() => import('~/pages/HomePage/HomePage')),
        icons: '',
        name: 'Giải pháp',
    },
    {
        path: routePath.HomePage,
        element: lazy(() => import('~/pages/HomePage/HomePage')),
        icons: '',
        name: 'Thư viện',
    },
    {
        path: routePath.HomePage,
        element: lazy(() => import('~/pages/HomePage/HomePage')),
        icons: '',
        name: 'Hỗ trợ',
    },
    {
        path: routePath.HomePage,
        element: lazy(() => import('~/pages/HomePage/HomePage')),
        icons: '',
        name: 'Phân phối và bảo hành',
    }
]

export default ListMenu