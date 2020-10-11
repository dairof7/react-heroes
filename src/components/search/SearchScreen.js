import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const {search} = useLocation();
  //uso el query string instalado con npm install query-string
  //para obtener el string ya parseado
  const {q = ''} = queryString.parse( search )
  console.log(q)
  
  const [ {textToSearch}, handleInputChange ] = useForm({
    textToSearch: q
  });
  
  const heroesFiltered = useMemo( () => getHeroesByName( q ), [q]);

  const handleSearch = (e) => {
    e.preventDefault()
    // if ( textToSearch.trim().length <= 1 ) {
    //   return;
    // }
    //con este genero un querystring, este se localiza en la barra del navegador
    history.push(`?q=${textToSearch}`)
  }


  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              name='textToSearch'
              placeholder='Write your hero'
              className='form-control shadow-lg p-3 mb-5 bg-white rounded'
              autoComplete='off'
              value={ textToSearch }
              onChange={ handleInputChange }
            />
            <button
              type='submit'
              className='btn mt-1 btn-outline-primary'
            >
              Search
            </button>
          </form>
        
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {
            (q === '') &&
            <div className='alert alert-info'> Search a Hero</div>
          }
          {
            (q !== '' && heroesFiltered.length === 0) &&
            <div className='alert alert-danger'> Heroe not found </div>
          }

          {
            heroesFiltered.map( heroe => (
                <HeroCard 
                key={heroe.id}
                {...heroe}
                /> 
            ))
          }
        </div>
      </div>
    </div>
  )
}
