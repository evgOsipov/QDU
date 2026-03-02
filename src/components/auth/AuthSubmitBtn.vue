<template>
  <v-btn
    type="submit"
    color="primary"
    block
    size="large"
    class="auth-submit-btn"
    :loading="loading"
  >
    {{ t('auth.login.submit') }}
  </v-btn>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  loading?: boolean
}>()

const { t } = useI18n()
</script>

<style scoped>
.auth-submit-btn {
  font-size: 16px;
  font-weight: 600;
  min-height: 48px;
  border-radius: 9999px !important;
  font-family: 'Open Sans', sans-serif;
  text-transform: none;
}
</style>
