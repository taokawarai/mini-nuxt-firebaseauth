import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'

export const useAuth = () => {
  const { $auth } = useNuxtApp()
  const user = useState('user', () => null)
  const router = useRouter()

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup($auth, provider)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut($auth)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // 認証状態を監視してユーザー情報をuserに保持する。
  // 画面をリロードした時でもuserの状態を確認するため、認証状態が維持される。
  const initAuth = () => {
    return new Promise((resolve) => {
      onAuthStateChanged($auth, (userData) => {
        user.value = userData
        resolve(userData)
      })
    })
  }

  return {
    user,
    signInWithGoogle,
    handleSignOut,
    initAuth
  }
}