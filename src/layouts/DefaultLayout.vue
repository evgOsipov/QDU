<template>
  <v-app>
    <AppSidebar />
    <v-app-bar elevation="0" border="b">
      <template #append>
        <LanguageSwitcher />
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>
