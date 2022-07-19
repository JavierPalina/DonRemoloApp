import React from 'react'
import { sectionCenter, item, photo, itemInfo } from './styles.module.scss'

const Menu = ({ items }) => {
  return (
    <div className={sectionCenter}>
      {items.map((menuItem) => {
        const { id, title, img, price} = menuItem
        return (
          <article key={id} className={item}>
            <img src={img} alt={title} className={photo} />
            <div className={itemInfo}>
                <h3>{title}</h3>
                <h4 className="price">${price}<small>.00</small></h4>
                <button>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.28571 11.5714V6.28571M6.28571 6.28571V1M6.28571 6.28571H11.5714M6.28571 6.28571H1" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
