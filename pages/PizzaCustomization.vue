<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <div class="pt-4 px-5">
      <div class="flex items-start">
        <button class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center absolute left-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="h-16 w-16 rounded-md flex items-center justify-center mx-auto">
          <img src="../assets/image.png" class="w-6 h-6 opacity-50" alt="image icon" />
        </div>
      </div>
    </div>
    
    <div class="px-5 mt-2">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-xl font-bold">Thai Peanut (30.48 cm)</h1>
          <p class="text-sm text-gray-600 mt-1">Thai peanut sauce, chicken, bell peppers, carrots, peanuts, cilantro.</p>
        </div>
        <div>
          <span class="text-lg font-medium">139 ILS</span>
        </div>
      </div>
      
      <div class="mt-6">
        <h2 class="text-lg font-medium mb-2">Additions</h2>
        
        <div class="bg-white rounded-lg">
          <div class="flex items-center justify-between py-3 px-3">
            <div class="flex items-center">
              <input type="checkbox" id="extra-chicken" class="w-5 h-5 rounded border-gray-300" />
              <label for="extra-chicken" class="ml-3 text-sm">Extra Chicken</label>
            </div>
            <div>
              <span class="text-sm">15 ILS</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="extra-cheese" class="w-5 h-5 rounded border-gray-300" />
              <label for="extra-cheese" class="ml-3 text-sm">Extra Cheese</label>
            </div>
            <div>
              <span class="text-sm">7 ILS</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="spicy-kick" class="w-5 h-5 rounded border-gray-300" />
              <label for="spicy-kick" class="ml-3 text-sm">Spicy Kick (Jalapeños)</label>
            </div>
            <div>
              <span class="text-sm">5 ILS</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="pineapple-chunks" class="w-5 h-5 rounded border-gray-300" />
              <label for="pineapple-chunks" class="ml-3 text-sm">Pineapple Chunks</label>
            </div>
            <div>
              <span class="text-sm">8 ILS</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="broccoli-florets" class="w-5 h-5 rounded border-gray-300" />
              <label for="broccoli-florets" class="ml-3 text-sm">Broccoli Florets</label>
            </div>
            <div>
              <span class="text-sm">5 ILS</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="mango-slices" class="w-5 h-5 rounded border-gray-300" />
              <label for="mango-slices" class="ml-3 text-sm">Mango Slices</label>
            </div>
            <div>
              <span class="text-sm">7 ILS</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div class="mt-8 px-5">
        <h2 class="text-lg font-medium mb-2">Changes</h2>
        
        <div class="bg-white rounded-lg">
          <div class="flex items-center justify-between py-3 px-3">
            <div class="flex items-center">
              <input type="checkbox" id="no-peanuts" class="w-5 h-5 rounded border-gray-300" />
              <label for="no-peanuts" class="ml-3 text-sm">No Peanuts</label>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="carrot-free" class="w-5 h-5 rounded border-gray-300" />
              <label for="carrot-free" class="ml-3 text-sm">Carrot-Free</label>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="no-cheese" class="w-5 h-5 rounded border-gray-300" />
              <label for="no-cheese" class="ml-3 text-sm">No Cheese</label>
            </div>
          </div>
          
          <div class="flex items-center justify-between py-3 px-3 border-t border-gray-100">
            <div class="flex items-center">
              <input type="checkbox" id="gluten-free" class="w-5 h-5 rounded border-gray-300" />
              <label for="gluten-free" class="ml-3 text-sm">Gluten-Free Crust (additional charge)</label>
            </div>
            <div>
              <span class="text-sm">45 ILS</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div class="mt-6 px-5">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span class="text-sm font-medium ml-2">Allergen info</span>
        </div>
        
        <div class="mt-6 mb-6">
        <p class="text-sm font-bold mb-3">Add your notes</p>
        <div class="flex w-full">
          <div class="w-1/2 flex items-center justify-between rounded-md border border-gray-300 px-2 py-2">
            <button class="text-gray-500 px-1 font-medium text-lg">−</button>
            <span class="text-gray-900">1</span>
            <button class="text-gray-500 px-1 font-medium text-lg">+</button>
          </div>
          <button class="w-1/2 ml-3 bg-black text-white rounded-lg py-3 px-4 font-medium flex items-center justify-center">
            Add to order
            <span class="ml-2">139 ILS</span>
          </button>
        </div>
        </div>
      </div>
</template>

<script setup lang="ts">
</script>