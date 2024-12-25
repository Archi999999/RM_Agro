import { DayPicker  } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export const DatePicker = ({ onDateChange, minDate, maxDate, selected, setSelected }) => {

  const handleDateChange = (dates) => {
    if (!dates) return
    setSelected(dates);
    if (dates?.from && dates?.to) {
      const formattedFrom = format(dates.from, 'yyyy-MM-dd');
      const formattedTo = format(dates.to, 'yyyy-MM-dd');
      onDateChange([formattedFrom, formattedTo]);
    }
  };

  return (
      <DayPicker
        mode={'range'}
        selected={selected}
        onSelect={handleDateChange}
        defaultMonth={minDate}
        minDate={minDate}
        maxDate={maxDate}
      />
  )
}