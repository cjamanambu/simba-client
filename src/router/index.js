import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "SimbaWise - Overview",
      authRequired: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      title: "SimbaWise - Login",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
    meta: {
      title: "SimbaWise - Register",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  const authRequired = to.matched.some((route) => route.meta.authRequired);
  if (!authRequired) return next();
  if (localStorage.getItem("isLoggedIn")) {
    next();
  } else {
    next({ name: "login" });
  }
});

export default router;
