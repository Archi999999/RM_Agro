import {useState, useEffect, useMemo, useCallback} from "react";
import { getMinMaxDates } from "../utils/dataUtils";

export const useFilterDashboardData = (data) => {
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

    if (dates.from && dates.to) {
      const { from, to } = dates;
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(from) && itemDate <= new Date(to);
      });
    }

    setFilteredData(filtered);
  }, [data]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleDateChange = (dates) => {
    setSelectedDates({from: dates[0], to: dates[1]});
  };

  useEffect(() => {
    applyFilters(selectedCategories, selectedDates);
  }, [applyFilters, selectedCategories, selectedDates]);

  return {
    filteredData,
    handleCategoryChange,
    handleDateChange,
    selectedCategories,
    selectedDates,
    minDate,
    maxDate,
    setSelectedCategories,
    setSelectedDates,
    categories
  };
};
