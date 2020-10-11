import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ( {
    isAutenticated,
    component: Component,
    ...rest
}

// ...rest se puede poner como route y pasarlo en la Route como
// route={route}
 ) => {
     // console.log(rest.location.pathname)
    localStorage.setItem('lastpath', rest.location.pathname)
    return (
        <div>
            <Route {...rest}
                component={ (props) => (
                    // si esta autenticado se llama el componente
                    (isAutenticated) ? 
                    ( <Component {...props} /> ):
                    ( <Redirect to ='login/' /> )
                )
                }
           
           /> 
        </div>
    )
}

PrivateRoute.protoTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
    }