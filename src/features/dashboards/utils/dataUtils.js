export const transformDataForCharts = (data) => {
  return data.reduce((acc, item) => {
    const existingEntry = acc.find(entry => entry.date === item.date);
    if (existingEntry) { existingEntry[item.category] = item.value;
    } else {
      acc.push({ date: item.date, [item.category]: item.value });
    }
    return acc;
    }, []);
};

export const transformDataForPieChart = (data) => {
  return data.reduce((acc, item) => {
    const existingCategory = acc.find((entry) => entry.name === item.category);
    if (existingCategory) { existingCategory.value += item.value;
    } else {
      acc.push({ name: item.category, value: item.value });
    } return acc;
    }, []);
};

export const getMinMaxDates = (data) => {
  const dates = data.map(item => new Date(item.date));
  const minDate = new Date(Math.min(...dates));
  const maxDate = new Date(Math.max(...dates));
  return { minDate, maxDate };
};