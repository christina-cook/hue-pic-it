import React, { useContext } from 'react'

const Context = React.createContext()

export function useAuth(){
  return useContext(Context)
}

export function authProvider({children}) {
  return (
    <Context.Provider>
      { children }
    </Context.Provider>
  )
}