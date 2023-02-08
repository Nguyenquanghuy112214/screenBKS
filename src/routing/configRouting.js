import { lazy } from 'react';
import { routePath } from './pathRouting';

const configRoutes = [
  {
    path: routePath.HomePage,
    element: lazy(() => import('~/pages/HomePage/HomePage')),
    icons: '',
    name: 'Home',
  },

  {
    path: routePath.Education,
    element: lazy(() => import('~/pages/EducationPage/EducationPage')),
    icons: '',
    name: 'Giáo dục',
  },

  {
    path: routePath.EnterprisePage,
    element: lazy(() => import('~/pages/EnterprisePage/Enterprise')),
    icons: '',
    name: 'Doanh nghiệp',
  },
  {
    path: routePath.Family,
    element: lazy(() => import('~/pages/FamilyPage/FamilyPage')),
    icons: '',
    name: 'Gia đình',
  },
  // {
  //   path: routePath.Library,
  //   element: lazy(() => import('~/pages/HomePage/HomePage')),
  //   icons: '',
  //   name: 'Thư viện',
  // },
  // {
  //   path: routePath.Support,
  //   element: lazy(() => import('~/pages/HomePage/HomePage')),
  //   icons: '',
  //   name: 'Hỗ trợ',
  // },
  // {
  //   path: routePath.Distribution,
  //   element: lazy(() => import('~/pages/HomePage/HomePage')),
  //   icons: '',
  //   name: 'PHÂN PHỐI VÀ BẢO HÀNH',
  // },

  // Not Found
  {
    path: '*',
    element: lazy(() => import('~/pages/NotFound/NotFound')),
    hiddenMenu: true,
  },
];

export default configRoutes;
