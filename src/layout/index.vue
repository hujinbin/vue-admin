<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <img
    alt="Vue logo"
    src="@/assets/logo.png"
  >
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-view />
  <div>
    <router-link to="/">
      首页
    </router-link>
    <router-link to="/about">
      关于
    </router-link>
    <router-link to="/hello">
      hello
    </router-link>
    {{ count }}
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
