import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import sourceData from "@/data.json";

const routes = [
  { path: "/", name: "home", component: HomeView, alias: "/home" },
  {
    path: "/protected",
    name: "protected",
    component: () =>
      import(/*webpackChunkName: "protected"*/ "@/views/ProtectedView"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/*webpackChunkName: "login"*/ "@/views/LoginView"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () =>
      import(/*webpackChunkName: "invoices"*/ "@/views/InvoicesView"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/example/:id(\\d+)+",
    name: "example",
    component: () => import(/*webpackChunkName: "login"*/ "@/views/LoginView"),
  },
  {
    path: "/destination/:id/:slug",
    name: "destination",
    component: () =>
      import(/*webpackChunkName: "destination"*/ "@/views/DestinationShowView"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to) {
      const exist = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exist)
        return {
          name: "notFound",
          // allows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience",
        component: () =>
          import(
            /*webpackChunkName: "destination"*/ "@/views/ExperienceShowView"
          ),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMath(.*)*",
    name: "notFound",
    component: () =>
      import(/*webpackChunkName: "notFound"*/ "@/views/NotFoundView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "travel-active-link",
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 400);
      })
    );
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
