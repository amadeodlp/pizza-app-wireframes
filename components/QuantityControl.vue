<template>
  <div class="flex items-center justify-between rounded-md bg-gray-100 px-2">
    <button 
      class="px-3 py-3 text-lg font-medium text-gray-500" 
      @click="decreaseQuantity"
    >
      －
    </button>
    <span class="px-4 text-base text-gray-900">{{ quantity }}</span>
    <button 
      class="px-3 py-3 text-lg font-medium text-gray-500" 
      @click="increaseQuantity"
    >
      ＋
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  initialQuantity: {
    type: Number,
    default: 1
  },
  minQuantity: {
    type: Number,
    default: 1
  },
  maxQuantity: {
    type: Number,
    default: 99
  }
});

const quantity = ref(props.initialQuantity);

const decreaseQuantity = () => {
  if (quantity.value > props.minQuantity) {
    quantity.value--;
  }
};

const increaseQuantity = () => {
  if (quantity.value < props.maxQuantity) {
    quantity.value++;
  }
};
</script>