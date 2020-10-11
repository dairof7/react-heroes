import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ( {history} ) => {
  // console.log(match.params.heroeId)
  //hook para obtener los parametros pasados por navegador 
  const { heroeId } = useParams();

  //aqui tambien optimizamos, evitando la recreacion del componente
  const heroe = useMemo(() => getHeroesById( heroeId ), [ heroeId ])


  const handleReturn = () => {
    if (history.length <= 2){
      history.push('/')
    } else {
      history.goBack()
    }
  }
  
  if (!heroe) {
    return <Redirect to='/'></Redirect>
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = heroe

  return (
    <div className="row mt-5">
      <div className="col-4">
          <img 
              src={ `../assets/heroes/${ heroeId }.jpg` }
              alt={ superhero }
              className="img-thumbnail animate__animated animate__fadeInLeft"
          />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
  )
}
