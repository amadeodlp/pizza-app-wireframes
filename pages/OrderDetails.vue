<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <div class="pt-4 px-5">
      <div class="flex items-start">
        <button class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div>
          <h1 class="text-base font-semibold">Your order</h1>
          <p class="text-sm text-gray-500">PizzaCrafters Co.</p>
        </div>
      </div>
    
    <div class="mt-4 px-5">
      <div class="bg-white rounded-lg p-4 flex items-start pb-6">
        <div class="h-24 w-24 bg-gray-200 mr-4 rounded-md flex items-center justify-center">
          <img src="../assets/image.png" class="w-4 h-4 opacity-50" alt="image icon" />
        </div>
        <div class="flex-1">
          <div class="flex justify-between">
            <h3 class="text-base font-medium">Thai Peanut (30.48 cm)</h3>
            <button class="text-gray-500">
              <img src="../assets/edit.png" class="w-5 h-5 opacity-70" alt="edit icon" />
            </button>
          </div>
          <p class="text-sm text-gray-500 mt-0.5">Thai peanut sauce, chicken, bell peppers, ...</p>
          
          <div class="mt-3 flex items-center justify-between">
            <div class="w-32 flex items-center justify-between rounded-md border border-gray-300 px-2 py-1">
              <button class="text-gray-500 px-1 font-medium text-lg">−</button>
              <span class="text-gray-900">1</span>
              <button class="text-gray-500 px-1 font-medium text-lg">+</button>
            </div>
            <div>
              <PriceDisplay :price="139" />
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 flex items-center bg-white">
        <input type="checkbox" id="add-cutlery" class="w-5 h-5 rounded" />
        <label for="add-cutlery" class="ml-3 text-sm font-medium">Add cutlery</label>
      </div>

      
      <div class="mt-4 px-5">
        <div class="flex items-center">
          <div class="text-base font-medium flex-1">Place a group order</div>
          <button class="bg-gray-500 text-white rounded-lg py-2 px-4 text-base font-medium flex items-center">
            <img src="../assets/add-user.png" class="w-5 h-5 mr-1 opacity-90" alt="add user" />
            Invite people
          </button>
        </div>
      </div>
      
      <div class="mt-6 px-5">
        <h2 class="text-lg font-semibold mb-4">Recommended for your order</h2>
        
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-gray-100 rounded-lg relative pb-3">
            <div class="h-20 w-full bg-gray-200 rounded-t-lg flex items-center justify-center relative">
              <img src="../assets/image.png" class="w-6 h-6 opacity-50" alt="image icon" />
              <button class="absolute bottom-0 right-0 translate-y-1/2 translate-x-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span class="text-gray-700 text-sm font-medium">+</span>
              </button>
            </div>
            <div class="mt-3 px-2">
              <p class="text-xs font-bold text-left">10 ILS</p>
              <p class="text-xs text-left">Coca Cola Zero, 0.25 ml</p>
            </div>
          </div>
          
          <div class="bg-gray-100 rounded-lg relative pb-3">
            <div class="h-20 w-full bg-gray-200 rounded-t-lg flex items-center justify-center relative">
              <img src="../assets/image.png" class="w-6 h-6 opacity-50" alt="image icon" />
              <button class="absolute bottom-0 right-0 translate-y-1/2 translate-x-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span class="text-gray-700 text-sm font-medium">+</span>
              </button>
            </div>
            <div class="mt-3 px-2">
              <p class="text-xs font-bold text-left">13 ILS</p>
              <p class="text-xs text-left">Homemade Ice Tea, 0.35 ml</p>
            </div>
          </div>
          
          <div class="bg-gray-100 rounded-lg relative pb-3">
            <div class="h-20 w-full bg-gray-200 rounded-t-lg flex items-center justify-center relative">
              <img src="../assets/image.png" class="w-6 h-6 opacity-50" alt="image icon" />
              <button class="absolute bottom-0 right-0 translate-y-1/2 translate-x-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span class="text-gray-700 text-sm font-medium">+</span>
              </button>
            </div>
            <div class="mt-3 px-2">
              <p class="text-xs font-bold text-left">10 ILS</p>
              <p class="text-xs text-left">Soda, 0.25 ml</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="fixed bottom-0 left-0 right-0 bg-white px-5 py-4 space-y-3">
      <button class="w-full py-3 bg-black text-white rounded-lg font-medium flex items-center justify-center px-4">
        <div class="flex items-center">
          <div class="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mr-2 text-sm font-bold">1</div>
          <span>Checkout</span>
          <span class="ml-20">139 ILS</span>
        </div>
      </button>
      
      <button class="w-full py-3 border border-gray-300 rounded-lg text-gray-800 font-medium">
        Add more items
      </button>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PriceDisplay from '~/components/PriceDisplay.vue';
</script>