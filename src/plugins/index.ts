import type { App } from 'vue'
import { vuetify } from './vuetify'
import { router } from './router'
import { pinia } from './pinia'
import { i18n } from './i18n'

export function registerPlugins(app: App): void {
  app.use(pinia).use(router).use(vuetify).use(i18n)
}
