
export default [
  {
    path: '/',
    component: () => import('layouts/auth_layout'),
    children: [
      // { path: '', component: () => import('components/landing') },
      { path: '', component: () => import('components/login') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/default'),
    children: [
      { path: 'dashboard', component: () => import('components/admin/home') },
      { path: 'tables', component: () => import('components/admin/about') },
      { path: 'popups', component: () => import('components/admin/popups') },
      { path: 'tabs', component: () => import('components/admin/tabs') },
      { path: 'listItems', component: () => import('components/admin/listItems') },
      { path: 'notify', component: () => import('components/admin/notify') },
      { path: 'chat', component: () => import('components/admin/chat') },
      { path: 'inputs', component: () => import('components/admin/inputs') },
      { path: 'editor', component: () => import('components/admin/editor') },
    ]
  },
  {
    path: '*',
    component: () => import('pages/404') // Displays 404 page
  }
]
