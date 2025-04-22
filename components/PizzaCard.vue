<template>
  <div class="pizza-card border-t border-gray-200 py-4">
    <div class="flex justify-between items-start">
      <div class="flex-1">
        <h3 class="text-base font-medium text-gray-900">{{ name }} ({{ size }} cm)</h3>
        <p class="mt-0.5 text-sm text-gray-500">{{ description }}</p>
        <div class="mt-1">
          <PriceDisplay :price="price" />
        </div>
      </div>
      <div class="ml-4">
        <div class="h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center">
          <!-- Placeholder for image -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: [Number, String],
    required: true
  },
  inOrderScreen: {
    type: Boolean,
    default: false
  }
});
</script>