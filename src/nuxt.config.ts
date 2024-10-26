export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Nuxt Firebase Auth'
    }
  },
  runtimeConfig: {
    public: {
      apiKey: '',
      authDomain: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: '',
    }
  }
})