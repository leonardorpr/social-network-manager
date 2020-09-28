import React, { memo, useCallback } from 'react';
import ReactDatePicker from 'react-datepicker';

import { faChevronLeft, faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

import { Field } from 'app/components';

import { DatePickerContainer, DatePickerHeader, DatePickerArrowButton, DatePickerMonth } from './DatePicker.styles';

import 'react-datepicker/dist/react-datepicker.css';

interface IDatePickerProps {
  date: Date | null;
  onSelectDate(date: Date): void;
}

const DatePicker: React.FC<IDatePickerProps> = ({ date, onSelectDate, ...rest }) => {
  const formatWeekDay = useCallback((date: string) => date.substring(0, 3), []);

  const formatMonthAndYear = useCallback((date: Date) => format(date, 'MMMM yyyy', { locale: ptBR }), []);

  return (
    <DatePickerContainer {...rest}>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        locale={ptBR}
        selected={date}
        formatWeekDay={(date) => formatWeekDay(date)}
        onSelect={onSelectDate}
        onChange={onSelectDate}
        placeholderText="DD/MM"
        customInput={<Field icon={faCalendarAlt} placeholder="DD/MM" />}
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
