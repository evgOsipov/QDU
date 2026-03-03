<template>
  <v-navigation-drawer
    v-model="drawerModel"
    :permanent="!smAndDown"
    :temporary="smAndDown"
    :rail="!smAndDown"
    :expand-on-hover="!smAndDown"
    width="320"
    color="white"
    class="app-sidebar"
    @mouseenter="!smAndDown && onMouseenter()"
    @mouseleave="!smAndDown && onMouseleave()"
  >
    <v-list
      nav
      density="compact"
      v-model:opened="opened"
      color="primary"
      class="sidebar-list"
    >
      <!-- Analytics -->
      <v-list-group value="analytics">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-chart-areaspline" :title="t('nav.analytics')" />
        </template>
        <v-list-item :to="{ name: 'analytics-main' }" :title="t('nav.main')" />
        <v-list-item :to="{ name: 'analytics-faculty' }" :title="t('nav.faculty')" />
        <v-list-item :to="{ name: 'analytics-directions' }" :title="t('nav.directions')" />
        <v-list-item :to="{ name: 'analytics-group' }" :title="t('nav.group')" />
        <v-list-item :to="{ name: 'analytics-subjects' }" :title="t('nav.subjects')" />
        <v-list-item :to="{ name: 'analytics-users' }" :title="t('nav.users')" />
      </v-list-group>

      <!-- Images -->
      <v-list-group value="images">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-image-outline" :title="t('nav.images')" />
        </template>
        <v-list-item value="image-upload" :title="t('nav.imageUpload')" />
        <v-list-item value="images-list" :title="t('nav.imagesList')" />
      </v-list-group>

      <!-- Location -->
      <v-list-item
        value="location"
        prepend-icon="mdi-map-marker-outline"
        append-icon="mdi-chevron-down"
        :title="t('nav.location')"
      />

      <!-- Exams -->
      <v-list-item
        value="exams"
        prepend-icon="mdi-clipboard-text-outline"
        append-icon="mdi-chevron-down"
        :title="t('nav.exams')"
      />

      <!-- Standalone items -->
      <v-list-item value="attendance" prepend-icon="mdi-calendar-check-outline" :title="t('nav.attendance')" />
      <v-list-item value="cameras" prepend-icon="mdi-cctv" :title="t('nav.cameras')" />
      <v-list-item value="schedule" prepend-icon="mdi-calendar-month-outline" :title="t('nav.schedule')" />
      <v-list-item value="buildings" prepend-icon="mdi-domain" :title="t('nav.buildings')" />
      <v-list-item value="user-management" prepend-icon="mdi-account-outline" :title="t('nav.userManagement')" />
      <v-list-item value="roi" prepend-icon="mdi-eye-outline" :title="t('nav.roi')" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const { smAndDown } = useDisplay()
const { t } = useI18n()

const drawerModel = computed({
  get: () => (smAndDown.value ? props.modelValue : true),
  set: (val: boolean) => emit('update:modelValue', val),
})

const opened = ref<string[]>(smAndDown.value ? ['analytics', 'images'] : [])

let savedOpened: string[] = ['analytics', 'images']

watch(smAndDown, (isMobile) => {
  if (isMobile) {
    opened.value = ['analytics', 'images']
    savedOpened = ['analytics', 'images']
  } else {
    opened.value = []
  }
})

function onMouseenter() {
  opened.value = [...savedOpened]
}

function onMouseleave() {
  savedOpened = [...opened.value]
  opened.value = []
}
</script>

<style scoped>
.app-sidebar {
  border-right: 1px solid #e5e7eb !important;
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
