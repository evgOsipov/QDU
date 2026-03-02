<template>
  <div class="auth-form-field">
    <label class="auth-form-field__label">{{ label }}</label>
    <v-text-field
      :model-value="modelValue"
      :placeholder="placeholder"
      :type="fieldType"
      :rules="rules"
      :append-inner-icon="isPassword ? (showPassword ? 'mdi-eye-off' : 'mdi-eye') : undefined"
      @update:model-value="$emit('update:modelValue', $event)"
      @click:append-inner="togglePassword"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  modelValue: string
  placeholder?: string
  type?: string
  rules?: ((v: string) => true | string)[]
}>(), {
  placeholder: '',
  type: 'text',
  rules: () => [],
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const isPassword = computed(() => props.type === 'password')
const showPassword = ref(false)

const fieldType = computed(() => {
  if (isPassword.value) return showPassword.value ? 'text' : 'password'
  return props.type
})

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.auth-form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.auth-form-field__label {
  font-size: 14px;
  font-weight: 400;
  color: #414651;
  font-family: 'Open Sans', sans-serif;
}
</style>
