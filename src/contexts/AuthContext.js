import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebase'

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
    login
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}