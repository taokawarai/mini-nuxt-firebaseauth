export default defineNuxtRouteMiddleware(async () => {
  const { user, initAuth } = useAuth()
  
  // もしログインしていなかったら、トップページにリダイレクトする
  if (process.client) {
    await initAuth()
    if (!user.value) {
      return navigateTo('/')
    }
  }
})