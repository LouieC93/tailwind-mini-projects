<template>
  <div
    class="bg-zinc-200 py-12 flex items-center justify-center overflow-auto gap-8 min-h-full"
  >
    <div class="md:w-3/4 md:max-w-5xl w-4/5 flex flex-col md:flex-row gap-12">
      <div
        class="flex flex-col grow basis-0"
        v-for="(plan, index) in plans"
        :key="index"
      >
        <div
          class="bg-zinc-400 rounded-xl w-full text-white p-3 hover:bg-zinc-600"
        >
          <div
            class="flex flex-col items-center p-8 bg-zinc-200 rounded-t-lg text-black"
          >
            <p class="uppercase text-xl">{{ plan.name }}</p>
            <h2 class="mt-8 font-bold text-5xl">{{ plan.storage }}</h2>
            <h3 class="mt-2">${{ plan.price }}/month</h3>
            <button
              type="button"
              class="p-3 px-6 mt-8 rounded-lg border border-zinc-400 hover:bg-zinc-600 hover:text-white duration-150"
            >
              Purchase
            </button>
          </div>

          <ul
            class="border-t border-zinc-400 p-6 bg-zinc-200 rounded-b-lg flex flex-col items-center"
          >
            <li
              class="flex text-black items-center"
              v-for="(feature, index) in plan.features"
              :key="index"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const plans = ref([
  {
    name: "basic",
    price: 2.99,
    storage: "100GB",
    features: ["Feature 1", "This is Feature 2", "Feature 3"],
  },
  {
    name: "pro",
    price: 4.99,
    storage: "200GB",
    features: ["Feature 1", "This is Feature 2", "Feature 3"],
  },
  {
    name: "premium",
    price: 9.99,
    storage: "1000GB",
    features: ["Feature 1", "This is Feature 2", "Feature 3"],
  },
]);
</script>
