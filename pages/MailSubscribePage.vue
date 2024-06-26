<template>
  <div
    class="bg-slate-400 flex items-center justify-center h-full overflow-hidden"
  >
    <div class="flex bg-slate-800 p-4 rounded-2xl">
      <div class="flex flex-col md:flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1577704004116-2415208e73d6?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="object-cover md:object-contain w-full md:w-auto h-80 object-[50%_40%] md:h-96 md:rounded-r-none rounded-xl hover:scale-105 duration-300"
        />

        <div class="p-6 md:p-10">
          <h2 class="text-2xl font-medium text-white text-center">
            Get the Newest Promotions
          </h2>
          <p class="my-4 text-white text-center max-w-sm">
            Don't miss any of the latest promotions! Sign up for our newsletter.
          </p>
          <div class="flex flex-col mt-5 gap-4">
            <input type="text" class="p-2 px-4 rounded-md bg-transparent border-2 border-slate-200 text-slate-200 focus:outline-none" placeholder="Enter your email address" />
            <button type="button" class="p-3 px-5 rounded-md bg-slate-200 hover:text-white hover:bg-slate-600 duration-100">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
