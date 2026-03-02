<template>
  <div class="auth-footer">
    <LanguageSwitcher />
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<style scoped>
.auth-footer {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
}
</style>
