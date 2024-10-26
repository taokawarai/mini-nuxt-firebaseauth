import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: runtimeConfig.public.apiKey as string,
    authDomain: runtimeConfig.public.authDomain as string,
    projectId: runtimeConfig.public.projectId as string,
    storageBucket: runtimeConfig.public.storageBucket as string,
    messagingSenderId: runtimeConfig.public.messagingSenderId as string,
    appId: runtimeConfig.public.appId as string,
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  return {
    provide: {
      auth
    }
  }
})