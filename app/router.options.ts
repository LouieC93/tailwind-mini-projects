import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "mail",
      path: "/mail",
      component: () =>
        import("~/pages/MailSubscribePage.vue").then((r) => r.default || r),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "mail",
      },
    },
  ],
};
