import {DatePicker} from "../DatePicker/DatePicker";

import styles from './FilterPanel.module.css'
import {useFilter} from "../../features/dashboards/hooks/useFilterDashboardData";

export const FilterPanel = (
  { className }) => {
  const {selectedCategories, setSelectedCategories, handleCategoryChange:onCategoryChange, categories} = useFilter()

  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(item => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  }

  return (
    <section className={className}>
      <DatePicker />
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