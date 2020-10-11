import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoute = ( {
    isAutenticated,
    component: Component,
    ...rest
}

// ...rest se puede poner como route y pasarlo en la Route como
// route={route}
) => {
    
    return (
        <div>
            <Route {...rest}
                component={ (props) => (
                    // si no esta autenticado se llama el componente
                    (!isAutenticated) ? 
                    ( <Component {...props} /> ):
                    ( <Redirect to ='/' /> )
                )
                }
           
           /> 
        </div>
    )
}

PublicRoute.protoTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
    }