<template>
  <div class="bg-indigo-50 flex items-center justify-center p-8 min-h-full">
    <div
      class="bg-white shadow-md p-8 md:px-32 md:py-24 rounded-2xl flex flex-col gap-2 md:gap-6"
    >
      <!-- nav -->
      <div
        class="flex flex-col md:flex-row justify-center md:justify-end items-center md:gap-4 mb-4 md:mb-8"
      >
        <div class="group p-1 md:p-4 cursor-pointer" v-for="i in 5" :key="i">
          <a href="#">Nav {{ i }}</a>
          <div
            class="border-b-2 border-black mt-1 mx-1 duration-300 opacity-0 group-hover:opacity-100"
          ></div>
        </div>
      </div>

      <div
        class="grid md:grid-cols-3 md:grid-rows-1 gap-2 md:gap-4 grid-cols-1 grid-rows-2"
      >
        <!-- search -->
        <div
          class="md:col-start-1 md:col-end-3 flex flex-row justify-between border border-indigo-900 rounded-md p-4 m-1 md:m-0"
        >
          <input type="text" class="outline-none" placeholder="Search..." />
          <button>
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g clip-path="url(#clip0_15_152)">
                  <rect width="24" height="24" fill="white"></rect>
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="rgb(49, 46, 129)"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="rgb(49, 46, 129)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </button>
        </div>

        <!-- upload -->
        <button
          type="button"
          class="box-border bg-indigo-900 text-white px-6 py-4 rounded-md hover:bg-white hover:text-indigo-900 border-2 hover:border-indigo-900 md:col-start-3 md:col-end-4 duration-200"
        >
          Upload
        </button>
      </div>

      <!-- images -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 md:mt-0">
        <div class="relative group cursor-pointer" v-for="i in 6" :key="i">
          <img
            src="https://images.unsplash.com/photo-1690743300187-51d68146adf7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-full md:w-60 aspect-square object-cover object-center"
          />
          <div
            class="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-opacity-60 bg-gray-800 p-2 px-4 duration-300 text-white flex flex-col"
          >
            <p class="text-sm">Image Title</p>
            <p class="text-xs">xxx Likes / xxx Shares</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
