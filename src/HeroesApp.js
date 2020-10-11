import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter'

const init = () => {
  // verifico en el local storage si existe un user, sino existe
  // establezco logged en false
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {
  // creo el reducer que voy a usar en todo el contexto de la app
  const [user, dispatch] = useReducer(authReducer, {}, init)

  // lo uso redibujar el nombre de usuario cada vez q este cambie
  useEffect(() => {
    localStorage.setItem( 'user', JSON.stringify(user) )
    
  }, [user])
  
  return (
    // paso el user y el dispatch al contexto
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
