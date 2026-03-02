<template>
  <v-navigation-drawer permanent width="220" color="white" class="app-sidebar">
    <template #prepend>
      <div class="sidebar-header">
        <img src="@/assets/img/logo.png" alt="logo" class="sidebar-logo" />
      </div>
    </template>

    <v-list
      nav
      density="compact"
      v-model:opened="opened"
      v-model:selected="active"
      active-color="primary"
      class="sidebar-list"
    >
      <!-- Analitika -->
      <v-list-group value="analitika">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-chart-areaspline" title="Analitika" />
        </template>
        <v-list-item value="asosiy" title="Asosiy" />
        <v-list-item value="fakultet" title="Fakultet" />
        <v-list-item value="yonalishlar" title="Yo'nalishlar" />
        <v-list-item value="guruh" title="Guruh" />
        <v-list-item value="fanlar" title="Fanlar" />
        <v-list-item value="foydalanuvchilar" title="Foydalanuvchilar" />
      </v-list-group>

      <!-- Rasmlar -->
      <v-list-group value="rasmlar">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-image-outline" title="Rasmlar" />
        </template>
        <v-list-item value="rasm-yuklash" title="Rasm yuklash" />
        <v-list-item value="rasmlar-royxati" title="Rasmlar ro'yxati" />
      </v-list-group>

      <!-- Joylashuv -->
      <v-list-item
        value="joylashuv"
        prepend-icon="mdi-map-marker-outline"
        append-icon="mdi-chevron-down"
        title="Joylashuv"
      />

      <!-- Imtihonlar -->
      <v-list-item
        value="imtihonlar"
        prepend-icon="mdi-clipboard-text-outline"
        append-icon="mdi-chevron-down"
        title="Imtihonlar"
      />

      <!-- Standalone items -->
      <v-list-item value="dars-davomati" prepend-icon="mdi-calendar-check-outline" title="Dars davomati" />
      <v-list-item value="kameralar" prepend-icon="mdi-cctv" title="Kameralar" />
      <v-list-item value="dars-jadvali" prepend-icon="mdi-calendar-month-outline" title="Dars jadvali" />
      <v-list-item value="binolar" prepend-icon="mdi-domain" title="Binolar" />
      <v-list-item value="user-management" prepend-icon="mdi-account-outline" title="User management" />
      <v-list-item value="roi" prepend-icon="mdi-eye-outline" title="ROI" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opened = ref(['analitika', 'rasmlar'])
const active = ref(['fakultet'])
</script>

<style scoped>
.app-sidebar {
  border-right: 1px solid #e5e7eb !important;
}

.sidebar-header {
  padding: 20px 16px 16px;
  border-bottom: 1px solid #f2f4f7;
}

.sidebar-logo {
  width: 114px;
  display: block;
}

.sidebar-list {
  padding: 8px;
}

/* Active item: solid purple background + white text */
.sidebar-list :deep(.v-list-item--active) {
  background-color: #7f56d9 !important;
}

.sidebar-list :deep(.v-list-item--active .v-list-item__overlay) {
  opacity: 0 !important;
}

.sidebar-list :deep(.v-list-item--active .v-list-item-title),
.sidebar-list :deep(.v-list-item--active .v-icon) {
  color: #ffffff !important;
}
</style>
