import Home from '../Views/Home/Home' // 首页
import HotMoving from '../Views/HotMoving/HotMoving' // 热映
import SoonMoving from '../Views/SoonMoving/SoonMoving' // 即将上映
import AmericaMoving from '../Views/AmericaMoving/AmericaMoving' // 北美热映
import AboutUs from '../Views/AboutUs/AboutUs' // 关于我
import Detail from '../Views/Detail/Detail' // 关于我

const routes = [
  {
    path: '/',
    component: Home,
    title: '首页',
    exact: true,
    redirect: true
  },
  {
    path: '/home',
    component: Home,
    title: '首页',
  },
  {
    path: '/HotMoving',
    component: HotMoving,
    title: '热映',
  },
  {
    path: '/soonMoving',
    component: SoonMoving,
    title: '即将上映',
  },
  {
    path: '/aboutUs',
    component: AboutUs,
    title: '关于我',
  },
  {
    path: '/americaMoving',
    component: AmericaMoving,
    title: '北美热映',
  },
  {
    path: '/detail/:id',
    component: Detail,
    title: '详情',
  },
]

export default routes

