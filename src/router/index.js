import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Home = () => import("../views/home/Home.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Mine = () => import("../views/mine/Mine.vue");
const Classify = () => import("../views/classify/Classify.vue");
const Detail = () => import("../views/detail/Detail.vue");
const Login = () => import("../components/content/login/Login.vue");
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/classify",
    component: Classify,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/datail/:iid",
    component: Detail,
  },
  {
    path: "/Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  // to 将要访问的路经
  if (to.path === "/login") return next();
  const token = window.sessionStorage.getItem("token");
  if (!token) next("/login");
  next()
});
export default router;
