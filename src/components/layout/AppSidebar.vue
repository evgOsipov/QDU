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
          <v-list-item v-bind="props" prepend-icon="mdi-chart-areaspline" :title="t('nav.analitika')" />
        </template>
        <v-list-item value="asosiy" :title="t('nav.asosiy')" />
        <v-list-item value="fakultet" :title="t('nav.fakultet')" />
        <v-list-item value="yonalishlar" :title="t('nav.yonalishlar')" />
        <v-list-item value="guruh" :title="t('nav.guruh')" />
        <v-list-item value="fanlar" :title="t('nav.fanlar')" />
        <v-list-item value="foydalanuvchilar" :title="t('nav.foydalanuvchilar')" />
      </v-list-group>

      <!-- Rasmlar -->
      <v-list-group value="rasmlar">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-image-outline" :title="t('nav.rasmlar')" />
        </template>
        <v-list-item value="rasm-yuklash" :title="t('nav.rasmYuklash')" />
        <v-list-item value="rasmlar-royxati" :title="t('nav.rasmlarRoyxati')" />
      </v-list-group>

      <!-- Joylashuv -->
      <v-list-item
        value="joylashuv"
        prepend-icon="mdi-map-marker-outline"
        append-icon="mdi-chevron-down"
        :title="t('nav.joylashuv')"
      />

      <!-- Imtihonlar -->
      <v-list-item
        value="imtihonlar"
        prepend-icon="mdi-clipboard-text-outline"
        append-icon="mdi-chevron-down"
        :title="t('nav.imtihonlar')"
      />

      <!-- Standalone items -->
      <v-list-item value="dars-davomati" prepend-icon="mdi-calendar-check-outline" :title="t('nav.darsDavomati')" />
      <v-list-item value="kameralar" prepend-icon="mdi-cctv" :title="t('nav.kameralar')" />
      <v-list-item value="dars-jadvali" prepend-icon="mdi-calendar-month-outline" :title="t('nav.darsJadvali')" />
      <v-list-item value="binolar" prepend-icon="mdi-domain" :title="t('nav.binolar')" />
      <v-list-item value="user-management" prepend-icon="mdi-account-outline" :title="t('nav.userManagement')" />
      <v-list-item value="roi" prepend-icon="mdi-eye-outline" :title="t('nav.roi')" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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

/* Hover для неактивных элементов — светло-серый */
.v-list-item:not(.v-list-item--active) :deep(.v-list-item__overlay) {
  background-color: #000000;
}

.v-list-item:not(.v-list-item--active):hover :deep(.v-list-item__overlay) {
  opacity: 0.06;
}

/* :active — светло-фиолетовый через overlay */
.v-list-item:not(.v-list-item--active):active :deep(.v-list-item__overlay) {
  background-color: #7f56d9 !important;
  opacity: 0.15 !important;
}

/* Активный выбранный элемент: сплошной фиолетовый + белый текст */
.sidebar-list :deep(.v-list-item--active) {
  background-color: #7f56d9 !important;
}

.v-list-item--active :deep(.v-list-item__overlay) {
  display: none;
}

.sidebar-list :deep(.v-list-item--active .v-list-item-title),
.sidebar-list :deep(.v-list-item--active .v-icon) {
  color: #ffffff !important;
}
</style>
