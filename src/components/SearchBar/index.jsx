import React from 'react'
import {container} from './styles.module.scss';

export const SearchBar = () => {
  return (
    <div className={container}>
        <form>
            <i className='fas fa-search'></i>
            <input type="text" id="search-item" placeholder='Busca algo de nuestro menú...'></input>
        </form>
    </div>
  )
}
