import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { getMinMaxDates } from '../utils/dataUtils';

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children, data }) => {
  const { minDate, maxDate } = useMemo(() => getMinMaxDates(data), [data]);
  const categories = useMemo(() => [...new Set(data.map(item => item.category))], [data]);

  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [selectedDates, setSelectedDates] = useState({ from: minDate, to: maxDate });
  const [filteredData, setFilteredData] = useState(data);

  const applyFilters = useCallback((categories, dates) => {
    let filtered = data;

    if (categories.length > 0) {
      filtered = filtered.filter((item) =>
        categories.includes(item.category)
      );
    }

    if (dates.length) {
      filtered = filtered.filter((item) => {
        const [from, to] = dates;
        const itemDate = new Date(item.date);
        return itemDate >= new Date(from) && itemDate <= new Date(to);
      });
    }

    setFilteredData(filtered);
  }, [data]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    applyFilters(categories, selectedDates);
  };

  const handleDateChange = (dates) => {
    setSelectedDates({from: dates[0], to: dates[1]});
    applyFilters(selectedCategories, dates);
  };

  return (
    <FilterContext.Provider value={{
      filteredData,
      handleCategoryChange,
      handleDateChange,
      selectedCategories,
      selectedDates,
      minDate,
      maxDate,
      categories,
      setSelectedDates,
      setSelectedCategories
    }}>
      {children}
    </FilterContext.Provider>
  );
};
