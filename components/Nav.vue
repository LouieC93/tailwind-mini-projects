<template>
  <nav class="bg-stone-300 w-full shadow-md shadow-zinc-500/30">
    <ul class="flex flex-col gap-0 md:flex-row justify-evenly">
      <li v-for="(router, index) in routers" :key="index" class="first:pt-2 md:first:p-0">
        <NuxtLink class="text-sm pb-2 md:py-4 px-8 block hover:scale-110 duration-150 font-medium" :to="router.path"
          >> {{ router.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
const routers = [
  {
    name: "Mail Subscription",
    path: "/mail",
  },
  {
    name: "Pricing Plans",
    path: "/pricing",
  },
  {
    name: "Product Modal",
    path: "/product",
  },
];
</script>
