import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('counter', () => {
  const User = ref(0)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
