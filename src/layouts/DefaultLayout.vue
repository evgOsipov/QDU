<template>
  <v-app>
    <AppSidebar />
    <v-app-bar elevation="0" border="b" />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>
