<template>
  <div class="auth-heading">
    <h1 class="auth-heading__title">{{ t('auth.login.title') }}</h1>
    <p class="auth-heading__subtitle">{{ t('auth.login.subtitle') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.auth-heading {
  text-align: center;
  margin-bottom: 32px;
}

.auth-heading__title {
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  color: #181d27;
  margin: 0 0 8px;
  font-family: 'Open Sans', sans-serif;
}

@media (max-width: 600px) {
  .auth-heading__title {
    font-size: 24px;
    line-height: 32px;
  }
}

.auth-heading__subtitle {
  font-size: 14px;
  font-weight: 400;
  color: #535862;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
</style>
