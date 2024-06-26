<template>
  <nav class="bg-stone-300 p-8 w-full shadow-md shadow-zinc-500/30">
    <ul class="flex justify-evenly">
      <li v-for="(router, index) in routers" :key="index">
        <NuxtLink :to="router.path">> {{ router.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
const routers = [
  {
    name: "Mail Subscribe",
    path: "/mail",
  },
];
</script>
