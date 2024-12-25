import { DayPicker  } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import {useFilter} from "../../features/dashboards/hooks/useFilterDashboardData";

export const DatePicker = () => {
  const {minDate, maxDate, selectedDates, setSelectedDates, handleDateChange: onDateChange} = useFilter()

  const handleDateChange = (dates) => {
    if (!dates) return
    setSelectedDates(dates);
    if (dates?.from && dates?.to) {
      const formattedFrom = format(dates.from, 'yyyy-MM-dd');
      const formattedTo = format(dates.to, 'yyyy-MM-dd');
      onDateChange([formattedFrom, formattedTo]);
    }
  };

  return (
      <DayPicker
        mode={'range'}
        selected={selectedDates}
        onSelect={handleDateChange}
        defaultMonth={minDate}
        minDate={minDate}
        maxDate={maxDate}
      />
  )
}