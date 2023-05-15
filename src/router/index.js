import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StatusView from "../views/StatusView.vue";

import { useRoutesStore } from "../stores/routes";
import { useProgressStore } from "../stores/progress";
import { getStageFromRouteName } from "../helpers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StatusView,
    },
    {
      path: "/status",
      name: "status",

      component: () => import("../views/StatusView.vue"),
    },
    {
      path: "/objective",
      name: "objective",

      component: () => import("../views/ObjectiveView.vue"),
    },
    {
      path: "/rooms",
      name: "rooms",

      component: () => import("../views/RoomsView.vue"),
    },
    {
      path: "/surface",
      name: "surface",

      component: () => import("../views/SurfaceView.vue"),
    },
    {
      path: "/estimation",
      name: "estimation",

      component: () => import("../views/EstimationView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const progress = useProgressStore();
  const routes = useRoutesStore();

  const actualStage = getStageFromRouteName(to.path, routes.routesMap);
  if (actualStage) {
    progress.$patch({ stage: actualStage });
  }
});

export default router;
