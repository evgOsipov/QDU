<template>
  <div class="auth-logo">
    <img :src="logoSrc" alt="logo" class="auth-logo__icon" />
  </div>
</template>

<script setup lang="ts">
import logoSrc from '@/assets/img/logo.png'
</script>

<style scoped>
.auth-logo {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}

.auth-logo__icon {
  width: 114px;
  height: auto;
  object-fit: contain;
}
</style>
