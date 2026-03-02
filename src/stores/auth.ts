import { defineStore } from 'pinia'
import { ref } from 'vue'

const TEST_LOGIN = 'test'
const TEST_PASSWORD = 'qwerty'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<{ login: string } | null>(null)

  async function login(loginValue: string, password: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 1200))
    if (loginValue === TEST_LOGIN && password === TEST_PASSWORD) {
      isAuthenticated.value = true
      user.value = { login: loginValue }
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
    user.value = null
  }

  return { isAuthenticated, user, login, logout }
})
