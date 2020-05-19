import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HeaderNav from "../components/headerNav.vue";
import Forum from "../views/forum.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    components: {
      mainContent: Home,
      headerNav: HeaderNav
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/forum",
    name: "forum",
    components: {
      mainContent: Forum,
      headerNav: HeaderNav
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
