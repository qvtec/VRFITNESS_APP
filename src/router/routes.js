
const routes = [
  { // Main Routes
    path: '/',
    component: () => import('layouts/TopLayout.vue'),
    meta: { authRequired: false },
    children: [
      { path: 'top', name: 'top', component: () => import('pages/Index') }
    ]
  },
  { // Auth Routes
    path: '/auth',
    component: () => import('layouts/DefaultLayout.vue'),
    meta: { authRequired: false },
    children: [
      { path: 'login', name: 'login', component: () => import('pages/auth/Login') }
    ]
  },
  { // User Routes
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    meta: { authRequired: true },
    children: [
      { path: 'home', name: 'home', component: () => import('pages/user/Home') },
      { path: 'list', name: 'list', component: () => import('pages/user/Home') },
      { path: 'add', name: 'add', component: () => import('pages/user/Home') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
