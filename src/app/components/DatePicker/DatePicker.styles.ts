import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

export const DatePickerContainer = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
    z-index: 2;
  }

  .react-datepicker-popper {
    transform: translate3d(20px, 260px, 0px) !important;

    ${MediaQueries.BIGGER_THAN_SMALL} {
      transform: translate3d(45px, 270px, 0px) !important;
    }
  }

  .react-datepicker {
    border-radius: 2px;
    border: none;
    -webkit-box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__month {
    margin-top: 0px;
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.colors.accent[100]};
    border: none;
    padding-top: 0px;
  }

  .react-datepicker__day {
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 32px;
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.typography.size.small};
    line-height: ${({ theme }) => theme.typography.lineHeight.small};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary[400]};

    &-name {
      font-family: 'Poppins', sans-serif;
      font-size: ${({ theme }) => theme.typography.size.small};
      line-height: ${({ theme }) => theme.typography.lineHeight.small};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.secondary[400]};
      width: 41px;
      height: 32px;
      padding-top: 5px !important;
    }

    &--outside-month {
      .react-datepicker__day-helper {
        padding-top: 5px !important;
        color: #6b778c !important;
      }
    }

    &--selected {
      border-radius: 0px;
      background-color: #216ba5;
      color: #0052cc;
      border: 2px solid #4c9aff;
      background-color: transparent;
      padding-top: 5px !important;

      .react-datepicker__day-helper {
        border-bottom: 2px solid #0052cc;
      }
    }

    &--keyboard-selected {
      padding-top: 5px !important;
      background-color: transparent;
    }

    &:focus,
    &:hover {
      color: #0052cc;
      background-color: transparent;

      .react-datepicker__day-helper {
        border-bottom: 2px solid #0052cc;
      }
    }
  }
`;

export const DatePickerHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

export const DatePickerArrowButton = styled.button`
  padding: 7px;

  svg {
    color: #a5adba;
    display: block;
  }
`;

export const DatePickerMonth = styled.h5`
  display: block;
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.secondary[400]};
`;
