import { createI18n } from 'vue-i18n'
import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

export type Locale = 'uz' | 'ru' | 'en'
export const LOCALES: Locale[] = ['uz', 'ru', 'en']

function detectLocale(): Locale {
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved && LOCALES.includes(saved)) return saved

  for (const lang of navigator.languages ?? [navigator.language]) {
    const code = lang.split('-')[0] as Locale
    if (LOCALES.includes(code)) return code
  }

  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { uz, ru, en },
})
