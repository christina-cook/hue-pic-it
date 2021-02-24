import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebase'

const Context = React.createContext()

export function useAuth(){
  return useContext(Context)
}

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  
  function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
  }
  
  useEffect(() => {
    const changeUserState = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return changeUserState
  }, [])
  
  const value = {
    currentUser,
    signUp, 
    login
  }
  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}