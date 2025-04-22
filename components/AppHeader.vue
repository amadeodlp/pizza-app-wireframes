<template>
  <div class="pt-11 px-5 flex items-center justify-between">
    <button class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <h1 v-if="title" class="text-lg font-semibold">{{ title }}</h1>
    <div class="flex items-center space-x-2">
      <slot name="rightButtons">
        <button v-if="showSearch" class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
        <button v-if="showInfo" class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </button>
        <button v-if="showImages" class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  showSearch: {
    type: Boolean,
    default: false
  },
  showInfo: {
    type: Boolean,
    default: false
  },
  showImages: {
    type: Boolean,
    default: false
  }
});
</script>