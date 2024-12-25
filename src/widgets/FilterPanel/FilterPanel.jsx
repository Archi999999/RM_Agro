import {useState} from "react";

import {DatePicker} from "../DatePicker/DatePicker";

import data from '../../data/data.json'

import styles from './FilterPanel.module.css'

const categories = [...new Set(data.map(item => item.category))]

export const FilterPanel = ({className, onCategoryChange, onDateChange, minDate, maxDate}) => {
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(item => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  }

  return (
    <section className={className}>
      <DatePicker onDateChange={onDateChange} minDate={minDate} maxDate={maxDate}/>
      <div className={styles.categories}>
        <h3>Выбор категории:</h3>
        <div className={styles.category_items}>
          {categories.map( (category, index) => (
            <label key={index + category}>
              {category}
              <input type="checkbox" value={category} onChange={() => handleCheckboxChange(category)} defaultChecked/>
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}