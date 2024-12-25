import {useState} from "react";

import data from '../../data/data.json'

import styles from './FilterPanel.module.css'

const categories = [...new Set(data.map(item => item.category))]

export const FilterPanel = ({className, handleCategoryChange}) => {
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(item => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    handleCategoryChange(updatedCategories);
  }

  return (
    <section className={className}>
      <div>Date Picker</div>
      <div className={styles.categories}>
        {categories.map( (category, index) => (
          <label key={index + category}>
            {category}
            <input type="checkbox" value={category} onChange={() => handleCheckboxChange(category)} defaultChecked/>
          </label>
        ))}
      </div>
    </section>
  )
}