<template>
  <div class="flex items-center space-x-1">
    <span class="font-medium">{{ price }}</span>
    <span class="font-medium text-gray-900">ILS</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  price: {
    type: [Number, String],
    required: true
  }
});
</script>