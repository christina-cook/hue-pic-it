import React, { useContext, useState, useEffect } from 'react'
import { auth, googleProvider, facebookProvider, githubProvider } from './firebase'

const Context = React.createContext()

export function useAuth(){
  return useContext(Context)
}

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signOut() {
    setCurrentUser()
    return auth.signOut()
  }

  async function signInWithPopup(provider) {
    let verifiedProvider
    if (provider === 'google') {
      verifiedProvider = googleProvider
    }
    try {
      const result = await auth.signInWithPopup(verifiedProvider)
      const credential = await result.credential
      const token = await credential.accessToken
      await setCurrentUser(result.user)
    } catch(error) {
        console.log('catch error', error)
    }
  }

  useEffect(() => {
    const changeUserState = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
      }
    })
    return changeUserState
  }, [])

  const value = {
    currentUser,
    signOut,
    signUp,
    login,
    signInWithPopup
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}
