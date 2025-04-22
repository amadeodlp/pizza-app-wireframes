<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="p-8">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-gray-900">PizzaCrafters Co. Wireframes</h1>
          <p class="mt-2 text-sm text-gray-600">
            Nuxt 3 + HeadlessUI implementation of the provided wireframes
          </p>
        </div>
        
        <div class="mt-8 space-y-4">
          <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h2 class="text-lg font-medium text-gray-900">Menu Screen</h2>
              <p class="text-sm text-gray-500">Shows the restaurant menu with pizza options</p>
            </div>
            <NuxtLink to="/PizzaMenu">
              <button class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium">
                View
              </button>
            </NuxtLink>
          </div>
          
          <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h2 class="text-lg font-medium text-gray-900">Order Details</h2>
              <p class="text-sm text-gray-500">Shows the current order with quantity control</p>
            </div>
            <NuxtLink to="/OrderDetails">
              <button class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium">
                View
              </button>
            </NuxtLink>
          </div>
          
          <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h2 class="text-lg font-medium text-gray-900">Pizza Customization</h2>
              <p class="text-sm text-gray-500">Shows options for customizing a pizza</p>
            </div>
            <NuxtLink to="/PizzaCustomization">
              <button class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium">
                View
              </button>
            </NuxtLink>
          </div>
        </div>
        
        <div class="mt-8 text-center text-xs text-gray-500">
          Mobile-first design • Tailwind CSS • HeadlessUI • Nuxt 3 • TypeScript
        </div>
        <div class="mt-8 text-center text-xs text-gray-500">
          Amadeo de la Peña - 2025 | All right reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Navigation menu for accessing the three wireframes
</script>