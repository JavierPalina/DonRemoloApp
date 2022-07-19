import React, { useState } from 'react'
import Menu from "../Menu/Menu"
import Categories from "../Categories/Categories"
import datamenu from "../../Data/dataMenu"
import {section} from './styles.module.scss'

const allCategories = ['Todos', ...new Set(datamenu.map((item) => item.category))]

function Sections() {
  const [menuItems, setMenuItems] = useState(datamenu)
  const [categories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'Todos') {
      setMenuItems(datamenu)
      return
    }
    const newItems = datamenu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className={section}>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default Sections
