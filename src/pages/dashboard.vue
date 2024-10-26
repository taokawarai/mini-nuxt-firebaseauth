<template>
  <div>
    <h1>ダッシュボード</h1>
    <p>ようこそ、{{ user?.email }}さん</p>
    <button @click="handleSignOut" style="cursor: pointer;">
      ログアウト
    </button>
  </div>
</template>

<script setup>
const { user, handleSignOut } = useAuth()

definePageMeta({
  middleware: ['auth']
})
</script>