const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/InformationCategoria' }, 
      { path: 'InformationCategoria', component: () => import('pages/InformationCategoria.vue') },
      { path: 'CriarCategoriaScreen', component: () => import('pages/CriarCategoriaScreen.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/CriarCategoriaScreen.vue'),
  }
];

export default routes;
