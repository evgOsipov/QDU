<template>
  <div class="auth-background" />
</template>

<style scoped>
.auth-background {
  flex: 1;
  background-image: url('@/assets/img/login-background.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

@media (max-width: 1024px) {
  .auth-background {
    display: none;
  }
}
</style>
