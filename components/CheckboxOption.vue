<template>
  <div class="flex items-center justify-between py-2.5">
    <div class="flex items-center">
      <input 
        type="checkbox" 
        :id="id" 
        v-model="isChecked"
        class="h-5 w-5 rounded border-gray-300"
      />
      <label :for="id" class="ml-3 text-sm font-medium text-gray-900">{{ label }}</label>
    </div>
    <div v-if="price">
      <PriceDisplay :price="price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  price: {
    type: [Number, String],
    default: null
  },
  initialChecked: {
    type: Boolean,
    default: false
  }
});

const isChecked = ref(props.initialChecked);
</script>