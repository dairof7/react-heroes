import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {
  
      const { dispatch } = useContext(AuthContext)
      
      const handleLogin = () => {

        const lastpath = localStorage.getItem('lastpath') || '/';
        //me permite ir a una ruta, agregandola a la historia
        //history.push('/')
        dispatch({
          type: types.login,
          payload: {
          name: 'emilio'
          }
        })      
        // reemplaza la historia, no permite volver a la pantalla anterior
        history.replace(lastpath)
      }
  return (

    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
