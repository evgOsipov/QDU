<template>
  <v-menu location="top end" :offset="8">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-web"
        variant="text"
        color="#111827"
        size="36"
        class="lang-globe-btn"
        :ripple="false"
      />
    </template>
    <v-list density="compact" min-width="100" :style="{ paddingTop: 0, paddingBottom: 0 }">
      <v-list-item
        v-for="loc in locales"
        :key="loc"
        :class="{ 'lang-item--active': locale === loc }"
        :style="locale === loc
          ? { backgroundColor: '#7F56D9', color: '#ffffff' }
          : {}"
        :ripple="false"
        @click="setLocale(loc)"
        @mousedown="onItemMousedown($event, loc)"
      >
        {{ loc.toUpperCase() }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LOCALES, type Locale } from '@/plugins/i18n'

const { locale } = useI18n()
const locales = LOCALES

function setLocale(loc: Locale) {
  locale.value = loc
  localStorage.setItem('locale', loc)
}

function onItemMousedown(event: MouseEvent, loc: Locale) {
  if (locale.value === loc) return

  const el = event.currentTarget as HTMLElement
  const overlay = el.querySelector('.v-list-item__overlay') as HTMLElement | null

  el.style.setProperty('background-color', 'rgba(127, 86, 217, 0.12)', 'important')
  if (overlay) overlay.style.display = 'none'

  const cleanup = () => {
    el.style.removeProperty('background-color')
    if (overlay) overlay.style.removeProperty('display')
    document.removeEventListener('mouseup', cleanup)
  }
  document.addEventListener('mouseup', cleanup)
}
</script>

<style scoped>
/* Отключаем Vuetify overlay на кнопке-активаторе */
.lang-globe-btn :deep(.v-btn__overlay) {
  display: none;
}

/* Очень светло-серый при hover и открытом меню */
.lang-globe-btn:hover,
.lang-globe-btn[aria-expanded="true"] {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

/* Светло-серый при зажатой кнопке */
.lang-globe-btn:active {
  background-color: rgba(0, 0, 0, 0.10) !important;
}

/* Hover для неактивных элементов списка — светло-серый */
.v-list-item:not(.lang-item--active) :deep(.v-list-item__overlay) {
  background-color: #000000;
}
.v-list-item:not(.lang-item--active):hover :deep(.v-list-item__overlay) {
  opacity: 0.06;
}

/* Active — светло-фиолетовый через overlay */
.v-list-item:not(.lang-item--active):active :deep(.v-list-item__overlay) {
  background-color: #7F56D9 !important;
  opacity: 0.15 !important;
}

/* Отключаем hover-оверлей для активного элемента */
.lang-item--active :deep(.v-list-item__overlay) {
  display: none;
}
</style>
