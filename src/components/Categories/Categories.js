import React from 'react'
import {btnContainer, separator} from './styles.module.scss'

const Categories = ({ categories, filterItems }) => {
  return (
    <>
    <div className={btnContainer}>
      {categories.map((category, index) => {
        return (
          <>
          <button
            type='checkbox'
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}>
            {category}
          </button>
          </>
        )
      })}
    </div>
    <div className={separator}></div>
    </>
  )
}

export default Categories