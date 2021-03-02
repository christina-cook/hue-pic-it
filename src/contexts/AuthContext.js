import React, { useContext, useState, useEffect } from 'react'
import { auth, googleProvider, facebookProvider, githubProvider } from './firebase'

const Context = React.createContext()

export function useAuth(){
  return useContext(Context)
}

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [displayName, setDisplayName] = useState('User')

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
    } else if (provider === 'facebook') {
      verifiedProvider = facebookProvider
    } else if (provider === 'github') {
      verifiedProvider = githubProvider
    }

    try {
      const result = await auth.signInWithPopup(verifiedProvider)
      const credential = await result.credential
      const token = await credential.accessToken
      await setCurrentUser(auth.currentUser)
    } catch(error) {
        alert(error.message)
    }
  }

  function updateName(name) {
    auth.currentUser.updateProfile({
      displayName: name,
    })
    setDisplayName(name)
  }

  function updateEmail(email) {
    auth.currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    auth.currentUser.updatePassword(password)
  }

  useEffect(() => {
    const changeUserState = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
        setDisplayName(user.displayName)
      }
    })
    return changeUserState
  }, [])

  const value = {
    currentUser,
    signOut,
    signUp,
    login,
    signInWithPopup,
    updateName,
    updateEmail,
    updatePassword,
    displayName
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}
