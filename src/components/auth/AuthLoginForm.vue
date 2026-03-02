<template>
  <v-form ref="formEl" class="auth-login-form" @submit.prevent="handleSubmit">
    <AuthFormField
      v-model="login"
      :label="t('auth.login.loginLabel')"
      :placeholder="t('auth.login.loginPlaceholder')"
      :rules="loginRules"
    />
    <AuthFormField
      v-model="password"
      :label="t('auth.login.passwordLabel')"
      :placeholder="t('auth.login.passwordPlaceholder')"
      :rules="passwordRules"
      type="password"
    />
    <AuthSubmitBtn :loading="loading" class="mt-2" />
    <p v-if="errorMsg" class="auth-error-msg">{{ errorMsg }}</p>
  </v-form>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { SubmitEventPromise } from 'vuetify'
import AuthFormField from './AuthFormField.vue'
import AuthSubmitBtn from './AuthSubmitBtn.vue'
import { useAuthStore } from '@/stores/auth'

const { t, locale } = useI18n()
const router = useRouter()
const authStore = useAuthStore()

const formEl = ref<HTMLFormElement | null>(null)

watch(locale, () => {
  const vFormProxy = (formEl.value as any)?.__vueParentComponent?.proxy
  vFormProxy?.resetValidation()
})

const login = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const loginRules = computed(() => [
  (v: string) => !!v || t('validation.required'),
  (v: string) => v.length >= 3 || t('validation.minLength', { min: 3 }),
])

const passwordRules = computed(() => [
  (v: string) => !!v || t('validation.required'),
  (v: string) => v.length >= 6 || t('validation.minLength', { min: 6 }),
])

async function handleSubmit(event: SubmitEventPromise) {
  const { valid } = await event
  if (!valid) return
  errorMsg.value = ''
  loading.value = true
  try {
    const success = await authStore.login(login.value, password.value)
    if (success) {
      router.push({ name: 'dashboard' })
    } else {
      errorMsg.value = t('auth.login.invalidCredentials')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-login-form {
  width: 100%;
}

.auth-error-msg {
  margin: 12px 0 0;
  font-size: 14px;
  font-weight: 400;
  color: #d92d20;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
</style>
