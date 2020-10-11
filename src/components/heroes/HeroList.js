import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  
  // const heroes = getHeroesByPublisher(publisher);
  //esta es una optimizacion ya que solo se va a renderizar el componente si el publisher cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ])

  return (
    <div className='card-columns animate__animated animate__bounce animate__fadeIn'>
      {
        heroes.map( heroe => (
          <HeroCard key={heroe.id} {...heroe}/>
        )
        )
      }
    </div>
  )
}
