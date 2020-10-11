import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DCScreen } from '../components/dc/DCScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
    {/* Navbar no tiene acceso a datos como el history que si lo tiene las rutas ya q no es una ruta */}
      <Navbar />
      <div className='container mt-2'>
        <Switch>
          <Route exact path='/marvel' component={ MarvelScreen } />
          <Route exact path='/heroe/:heroeId' component={ HeroScreen } />
          <Route exact path='/dc' component={ DCScreen } />
          <Route exact path='/search' component={ SearchScreen } />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  )
}
