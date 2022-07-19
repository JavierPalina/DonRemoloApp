import React from 'react'
import { SearchBar } from '../SearchBar'
import { containerMain } from './styles.module.scss'
import Sections from '../Sections/index'

  const Main = () => {
  return (
    <div className={containerMain}>
      <SearchBar />
      <h2>Categorías</h2>
      <p>Elige nuestras deliciosas pizzas</p>
      <Sections />
    </div>
  )
}

export default Main