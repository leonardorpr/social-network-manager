import React, { memo, useCallback, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

import { DatePickerContainer, DatePickerHeader, DatePickerArrowButton, DatePickerMonth } from './DatePicker.styles';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const handleSetDate = useCallback((date: Date) => setDate(date), []);

  const formatWeekDay = useCallback((date: string) => date.substring(0, 3), []);

  const formatMonthAndYear = useCallback((date: Date) => format(date, 'MMMM yyyy', { locale: ptBR }), []);

  return (
    <DatePickerContainer>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        locale={ptBR}
        selected={date}
        formatWeekDay={(date) => formatWeekDay(date)}
        onSelect={handleSetDate}
        onChange={handleSetDate}
        renderDayContents={(dayOfMonth) => <span className="react-datepicker__day-helper">{dayOfMonth}</span>}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <DatePickerHeader>
            <DatePickerArrowButton onClick={decreaseMonth}>
              <FontAwesomeIcon icon={faChevronLeft} height="8px" width="4px" />
            </DatePickerArrowButton>
            <DatePickerMonth>{formatMonthAndYear(date)}</DatePickerMonth>
            <DatePickerArrowButton onClick={increaseMonth}>
              <FontAwesomeIcon icon={faChevronRight} height="8px" width="4px" />
            </DatePickerArrowButton>
          </DatePickerHeader>
        )}
      />
    </DatePickerContainer>
  );
};

export default memo(DatePicker);
