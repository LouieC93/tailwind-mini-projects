import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "Mail Subscription",
      path: "/mail",
      component: () =>
        import("~/pages/MailSubscribe.vue").then((r) => r.default || r),
    },
    {
      name: "Pricing Plans",
      path: "/pricing",
      component: () =>
        import("~/pages/PricingPlans.vue").then((r) => r.default || r),
    },
    {
      name: "Product Modal",
      path: "/product",

      component: () =>
        import("~/pages/ProductModal.vue").then((r) => r.default || r),
    },
    {
      name: "Image Gallery",
      path: "/gallery",

      component: () =>
        import("~/pages/ImageGallery.vue").then((r) => r.default || r),
    },
    {
      name: "Login Modal",
      path: "/login",

      component: () =>
        import("~/pages/LoginModal.vue").then((r) => r.default || r),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "mail",
      },
    },
  ],
};
