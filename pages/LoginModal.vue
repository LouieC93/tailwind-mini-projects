<template>
  <div class="bg-violet-50 flex items-center justify-center min-h-full">
    <!-- modal -->
    <div
      class="relative bg-white flex flex-col rounded-2xl shadow-xl shadow-gray-400/30 md:grid md:grid-cols-7 md:grid-rows-1 w-4/5 md:max-w-4xl gap-4 overflow-hidden"
    >
      <div class="col-start-1 col-end-5 p-12 pl-16">
        <h2 class="text-3xl font-bold mb-4">Log In</h2>
        <p class="text-gray-400 mb-8">
          Log in to your account to access all amazing features and contents.
        </p>
        <!--  -->
        <input
          type="text"
          class="w-full border border-gray-300 outline-none p-4 rounded-md"
          placeholder="Enter your email address"
        />
        <!--  -->
        <div
          class="flex flex-col md:flex-row justify-between items-center my-6 gap-4"
        >
          <p class="text-emerald-600">Forgot password?</p>
          <button
            type="button"
            class="bg-emerald-600 rounded-md py-4 px-8 text-white w-full md:w-auto hover:opacity-85 hover:-translate-y-1 duration-200"
          >
            Next →
          </button>
        </div>

        <!--  -->
        <div class="border-b border-gray-300 my-8"></div>
        <!--  -->
        <p class="text-gray-400 mb-8 text-center">or Log in with</p>
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <button
            type="button"
            class="border border-gray-300 p-3 flex items-center gap-4 justify-center rounded-md text-gray-500 md:grow hover:-translate-y-1 hover:shadow-md shadow-gray-400/30 duration-200"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-9 h-9"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#1877F2"
                  d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                ></path>
                <path
                  fill="#ffffff"
                  d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                ></path>
              </g>
            </svg>
            <span>Facebook</span>
          </button>
          <button
            type="button"
            class="border border-gray-300 p-3 flex items-center gap-4 justify-center rounded-md text-gray-500 md:grow hover:-translate-y-1 hover:shadow-md shadow-gray-400/30 duration-200"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-9 h-9"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#4285F4"
                  d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                ></path>
                <path
                  fill="#34A853"
                  d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                ></path>
              </g>
            </svg>
            <span>Google</span>
          </button>
        </div>
      </div>
      <!-- img -->
      <img
        src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="md:block hidden col-start-5 col-end-8 w-full h-full object-cover object-center"
      />
      <!-- close button -->
      <div
        class="absolute rounded-full right-3 top-4 text-xl bg-white/90 aspect-square text-gray-500 text-medium w-10 h-10 flex items-center justify-center shadow-md shadow-gray-400/50 cursor-pointer hover:-translate-y-1 transition"
      >
        X
      </div>
    </div>
  </div>
</template>
