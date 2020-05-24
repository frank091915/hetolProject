import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import HeaderNav from "../components/headerNav.vue";
import Forum from "../views/forum.vue";
import AiSolution from "../views/aiSolution.vue";
import Register from "../views/register.vue";
import ContactUs from "../views/contactUs";

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
  {
    path: "/solution",
    name: "solution",
    components: {
      mainContent: AiSolution,
      headerNav: HeaderNav
    }
  },
  {
    path: "/register",
    name: "register",
    components: {
      mainContent: Register,
      headerNav: HeaderNav
    }
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      mainContent: ContactUs,
      headerNav: HeaderNav
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
