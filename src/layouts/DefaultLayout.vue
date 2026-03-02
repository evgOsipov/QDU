<template>
  <v-app>
    <v-app-bar elevation="0" border="b">
      <template #prepend>
        <v-app-bar-nav-icon v-if="smAndDown" @click="drawerOpen = !drawerOpen" />
        <div class="brand" :class="{ 'brand--mobile': smAndDown }">
          <img src="@/assets/img/logo.png" alt="Cradle" class="brand-logo" />
        </div>
      </template>
      <template #append>
        <LanguageSwitcher />
      </template>
    </v-app-bar>
    <AppSidebar v-model="drawerOpen" />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { smAndDown } = useDisplay()
const drawerOpen = ref(false)
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

.brand--mobile {
  width: auto;
  border-right: none;
}

.brand-logo {
  width: 114px;
}
</style>
