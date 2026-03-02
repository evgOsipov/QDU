<template>
  <div class="login-view">
    <!-- Left panel -->
    <div class="login-panel">
      <AuthGridDecor />
      <div class="login-panel__content">
        <AuthLogo />
        <AuthHeading />
        <AuthLoginForm />
      </div>
      <AuthFooter />
    </div>

    <!-- Right panel -->
    <AuthBackground />
  </div>
</template>

<script setup lang="ts">
import AuthGridDecor from '@/components/auth/AuthGridDecor.vue'
import AuthLogo from '@/components/auth/AuthLogo.vue'
import AuthHeading from '@/components/auth/AuthHeading.vue'
import AuthLoginForm from '@/components/auth/AuthLoginForm.vue'
import AuthBackground from '@/components/auth/AuthBackground.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'
</script>

<style scoped>
.login-view {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.login-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 490px;
  flex-shrink: 0;
  background-color: #ffffff;
  overflow: hidden;
}

.login-panel__content {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
}

/* Планшет: скрываем фон, панель на всю ширину */
@media (max-width: 1024px) {
  .login-panel {
    width: 100%;
    align-items: center;
  }

  .login-panel__content {
    max-width: 490px;
    width: 100%;
  }
}

/* Мобильный: уменьшаем паддинг */
@media (max-width: 600px) {
  .login-panel__content {
    max-width: 100%;
    padding: 0 24px;
  }
}
</style>
