<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// For GitHub Pages routing
onMounted(() => {
  // Check if the URL contains the redirect pattern from our 404.html
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
});
</script>

<style>
/* Global styles */
body {
  @apply bg-white text-black antialiased;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.phone-status-bar {
  background-color: white;
  height: 44px;
}
</style>