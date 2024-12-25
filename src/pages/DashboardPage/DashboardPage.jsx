import {lazy, Suspense, useState} from "react";

import {SideNav} from "../../widgets/SideNav/SideNav";
import {FilterPanel} from "../../widgets/FilterPanel/FilterPanel";

import data from '../../data/data.json';

import styles from "./DashboardPage.module.css";
import {useFilterDashboardData} from "../../features/dashboards/hooks/useFilterDashboardData";

const LineGraph = lazy(() => import('../../features/dashboards/LineGraph/LineGraph'))
const BarChartComponent = lazy(() => import('../../features/dashboards/BarChart/BarChart'));
const PieChartComponent = lazy(() => import('../../features/dashboards/PieChart/PieChart'));

export const DashboardPage = () => {
  const [selectedChart, setSelectedChart] = useState('line');

  const {
    filteredData,
    handleCategoryChange,
    handleDateChange,
    maxDate,
    minDate,
    selectedDates,
    selectedCategories,
    setSelectedDates,
    setSelectedCategories,
    categories
  } = useFilterDashboardData(data)

  const renderChart = () => {
    switch (selectedChart) {
      case 'line':
        return <LineGraph data={filteredData}/>;
      case 'bar':
        return <BarChartComponent data={filteredData}/>;
      case 'pie':
        return <PieChartComponent data={filteredData}/>;
      default:
        return null;
    }
  }

  return (
    <div className={styles.dashboard_page}>
      <SideNav setSelectedChart={setSelectedChart} className={styles.side_nav} />
      <div className={styles.content_container}>
        <FilterPanel className={styles.filter_panel}
                     onCategoryChange={handleCategoryChange}
                     onDateChange={handleDateChange}
                     minDate={minDate}
                     maxDate={maxDate}
                     selectedDates={selectedDates}
                     selectedCategories={selectedCategories}
                     setSelectedDate={setSelectedDates}
                     setSelectedCategories={setSelectedCategories}
                     categories={categories}
        />
        <main className={styles.main}>
          <Suspense fallback={<div>Loading...</div>}>
            {renderChart()}
          </Suspense>
        </main>
      </div>
    </div>);
}