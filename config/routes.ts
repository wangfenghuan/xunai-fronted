export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', layout: false, name: '登录', component: './user/login' },
      { path: '/user', redirect: '/user/login' },
      {
        name: '注册结果',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      { name: '注册', icon: 'smile', path: '/user/register', component: './user/register' },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: '/exception',
    routes: [
      { path: '/exception', redirect: '/exception/403' },
      { name: '403', icon: 'smile', path: '/exception/403', component: './exception/403' },
      { name: '404', icon: 'smile', path: '/exception/404', component: './exception/404' },
      { name: '500', icon: 'smile', path: '/exception/500', component: './exception/500' },
    ],
  },
  {
    name: '个人页',
    icon: 'user',
    path: '/account',
    routes: [
      { path: '/account', redirect: '/account/center' },
      { name: '个人中心', icon: 'smile', path: '/account/center', component: './account/center' },
      {
        name: '个人设置',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  { path: '/', redirect: '/dashboard/analysis' },
  { component: '404', path: '/*' },
];
