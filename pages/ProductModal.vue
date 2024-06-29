<template>
  <div
    class="bg-stone-200 flex items-center justify-center h-full"
  >
    <div
      class="bg-white rounded-2xl p-8 shadow-xl shadow-stone-800/20 grid grid-rows-1 grid-cols-1 md:grid-cols-5 w-3/4 md:w-auto md:max-h-[450px] md:aspect-[5/3] gap-4 overflow-hidden"
    >
      <div
        class="md:col-start-1 md:col-end-3 aspect-square md:aspect-auto overflow-hidden h-full max-h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="w-full h-full hover:scale-110 duration-200 rounded-lg object-cover object-center"
        />
      </div>
      <div
        class="md:col-start-3 md:col-end-6 flex flex-col gap-3 mt-2 md:mt-0 items-center text-center"
      >
        <div class="bg-stone-800 rounded-full p-2 px-6 text-white">
          Free Shipping
        </div>
        <h2 class="font-medium text-2xl">
          Potted Plants(Easy-care & pet-friendly)
        </h2>
        <p class="line-through text-sm">$799</p>
        <p class="font-bold text-4xl">$799</p>
        <p class="text-sm text-stone-400">
          Delivered to your door. Free Shipping. 30-Day Guarantee.
        </p>
        <button
          type="button"
          class="group bg-blue-500 rounded-lg w-full text-white p-4 mt-2 border-b-8 border-b-blue-600 hover:bg-blue-600 duration-200"
        >
          <span class="group-hover:translate-y-1 block duration-200">
            Add to cart
          </span>
        </button>
        <div class="flex items-center group gap-2">
          <div
            class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
          ></div>
          <p class="text-sm">50+ pcs. in Stock</p>
        </div>
      </div>
    </div>
  </div>
</template>
