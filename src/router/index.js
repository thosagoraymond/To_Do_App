import { createRouter, createWebHistory } from "vue-router";
import AllList from "../views/AllListVue.vue";
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "allList",
      component: AllList,
    },
    {
      path: "/done",
      name: "done",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DoneVue.vue"),
    },
    {
      path: "/undone",
      name: "undone",
      component: () => import("../views/UndoneView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../components/TodoApp.vue")
    }
  ],
});

export default router;
