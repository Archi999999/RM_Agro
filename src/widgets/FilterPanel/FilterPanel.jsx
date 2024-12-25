import {DatePicker} from "../DatePicker/DatePicker";

import styles from './FilterPanel.module.css'

export const FilterPanel = (
  {
    className,
    onCategoryChange,
    onDateChange,
    minDate,
    maxDate,
    selectedDates,
    setSelectedDate,
    selectedCategories,
    setSelectedCategories,
    categories
  }) => {
  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(item => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  }

  return (
    <section className={className}>
      <DatePicker onDateChange={onDateChange} minDate={minDate} maxDate={maxDate} selected={selectedDates} setSelected={setSelectedDate} />
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