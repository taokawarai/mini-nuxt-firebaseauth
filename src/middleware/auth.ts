export default defineNuxtRouteMiddleware(async () => {
  const { user, initAuth } = useAuth()
  
  if (process.client) {
    await initAuth()
    if (!user.value) {
      return navigateTo('/')
    }
  }
})