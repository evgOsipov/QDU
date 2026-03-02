<template>
  <v-app>
    <v-app-bar elevation="0" border="b">
      <template #prepend>
        <div class="brand">
          <img src="@/assets/img/logo.png" alt="Cradle" class="brand-logo" />
        </div>
      </template>
      <template #append>
        <LanguageSwitcher />
      </template>
    </v-app-bar>
    <AppSidebar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
  width: 220px;
  border-right: 1px solid #f2f4f7;
}

.brand-logo {
  width: 114px;
}
</style>
