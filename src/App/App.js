import {DashboardPage} from "../pages/DashboardPage/DashboardPage";
import {FilterProvider} from "../features/dashboards/hooks/useFilterDashboardData";

import data from '../data/data.json'


export const App = () => {
  return (
    <FilterProvider data={data}>
      <DashboardPage />
    </FilterProvider>
  );
}
