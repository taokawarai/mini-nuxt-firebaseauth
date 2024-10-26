<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <button @click="signInWithGoogle" style="padding: 10px 20px; cursor: pointer;">
      Googleでログイン
    </button>
  </div>
</template>

<script setup>
const { signInWithGoogle } = useAuth()
</script>