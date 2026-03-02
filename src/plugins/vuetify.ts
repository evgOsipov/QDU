import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import type { ThemeDefinition } from 'vuetify'

// Vuetify styles are injected by vite-plugin-vuetify (autoImport: true)
// MDI font CSS is imported via src/assets/styles/main.css

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#7F56D9',
    'primary-darken-1': '#6941C6',
    secondary: '#F3F0FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    'on-primary': '#FFFFFF',
    'on-surface': '#1A1A2E',
    'text-primary': '#1A1A2E',
    'text-secondary': '#6B7280',
    'border-color': '#E5E7EB',
  },
}

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: { lightTheme },
  },
  defaults: {
    VBtn: {
      rounded: 'pill',
      elevation: 0,
    },
    VTextField: {
      rounded: 'xl',
      variant: 'outlined',
      density: 'comfortable',
      hideDetails: 'auto',
    },
  },
})
