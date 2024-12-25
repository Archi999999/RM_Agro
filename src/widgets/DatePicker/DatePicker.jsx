import { DayPicker  } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

import styles from './DatePicker.module.css'
import {useState} from "react";

export const DatePicker = ({ onDateChange, minDate, maxDate }) => {
  const [selected, setSelected] = useState({from: minDate, to: maxDate});

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
    <div
      className={styles.datepicker}
    >
      <DayPicker
        mode={'range'}
        selected={selected}
        onSelect={handleDateChange}
        defaultMonth={minDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  )
}