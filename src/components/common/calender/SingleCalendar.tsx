'use client';

import * as React from 'react';
import { Calendar } from './ui/calendar';

export default function SingleCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
