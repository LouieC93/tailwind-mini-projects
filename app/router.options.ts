import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "Mail Subscription",
      path: "/mail",
      component: () =>
        import("~/pages/MailSubscribePage.vue").then((r) => r.default || r),
    },
    {
      name: "Pricing Plans",
      path: "/pricing",
      component: () =>
        import("~/pages/PricingPlansPage.vue").then((r) => r.default || r),
    },
    {
      name: "Product Modal",
      path: "/product",

      component: () =>
        import("~/pages/ProductModalPage.vue").then((r) => r.default || r),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "mail",
      },
    },
  ],
};
