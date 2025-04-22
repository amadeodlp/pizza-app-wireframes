<template>
  <div class="min-h-screen bg-white pb-24">
    <div class="phone-status-bar h-11 bg-white"></div>
    
    <AppHeader showSearch showInfo />
    
    <div class="px-5 pt-2 text-center">
      <h1 class="text-2xl font-bold">PizzaCrafters Co.</h1>
      <div class="flex items-center justify-center mt-2 space-x-1 text-sm text-gray-600">
        <span class="flex items-center">
          <img src="/assets/motorcycle.png" class="w-4 h-4 mr-1 opacity-70" alt="motorcycle" />
          15 ILS
        </span>
        <span class="mx-1">•</span>
        <span>30-40 min</span>
        <span class="mx-1">•</span>
        <span>from 150 ILS</span>
      </div>
    </div>
    
    <div class="mt-6 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div class="flex justify-center space-x-2 px-1 py-2">
        <button class="tab-button bg-gray-300 text-primary font-medium">
          Recommended for you
        </button>
        <button class="tab-button bg-accent text-primary">
          Popular
        </button>
        <button class="tab-button bg-accent text-primary">
          Meat Lover's Pizzas
        </button>
      </div>
    </div>
    
    <div class="mt-2 px-5">
      <h2 class="text-xl font-semibold mb-2">Recommended for you</h2>
      
      <div class="pizza-card py-4">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h3 class="text-base font-medium text-gray-900">Margherita (30.48 cm)</h3>
            <p class="mt-0.5 text-sm text-gray-500">Tomato sauce, fresh mozzarella, basil, olive oil</p>
            <div class="mt-1">
              <PriceDisplay :price="100" />
            </div>
          </div>
          <div class="ml-4">
            <div class="h-24 w-52 bg-gray-200 rounded-md flex items-center justify-center">
              <!-- Placeholder for image -->
            </div>
          </div>
        </div>
      </div>
      
      <div class="pizza-card border-t border-gray-200 py-4">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h3 class="text-base font-medium text-gray-900">Mediterranean (35.56 cm)</h3>
            <p class="mt-0.5 text-sm text-gray-500">Olive tapenade, feta cheese, sun-dried tomatoes, artichoke hearts, spinach</p>
            <div class="mt-1">
              <PriceDisplay :price="175" />
            </div>
          </div>
          <div class="ml-4">
            <div class="h-24 w-52 bg-gray-200 rounded-md flex items-center justify-center">
              <!-- Placeholder for image -->
            </div>
          </div>
        </div>
      </div>
      
      <div class="pizza-card border-t border-gray-200 py-4">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h3 class="text-base font-medium text-gray-900">Truffle Bliss (35.56 cm)</h3>
            <p class="mt-0.5 text-sm text-gray-500">Truffle oil, mixed mushrooms, caramelized onions, fontina cheese</p>
            <div class="mt-1">
              <PriceDisplay :price="215" />
            </div>
          </div>
          <div class="ml-4">
            <div class="h-24 w-52 bg-gray-200 rounded-md flex items-center justify-center">
              <!-- Placeholder for image -->
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-200 mt-4 pt-4"></div>
      <h2 class="text-xl font-semibold mt-2 mb-2">Popular</h2>
      
      <div class="pizza-card py-4">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h3 class="text-base font-medium text-gray-900">Thai Peanut (30.48 cm)</h3>
            <p class="mt-0.5 text-sm text-gray-500">Thai peanut sauce, chicken, bell peppers, carrots, peanuts, cilantro</p>
            <div class="mt-1">
              <PriceDisplay :price="139" />
            </div>
          </div>
          <div class="ml-4">
            <div class="h-24 w-52 bg-gray-200 rounded-md flex items-center justify-center">
              <!-- Placeholder for image -->
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="fixed bottom-0 left-0 right-0 py-6 flex justify-center bg-white border-t">
      <div class="w-1/3 h-1 bg-black rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import PizzaCard from '~/components/PizzaCard.vue';
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>