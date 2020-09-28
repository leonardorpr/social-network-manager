import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

export const TextAreaContainer = styled.div`
  position: relative;

  .emoji-picker-react {
    position: absolute;
    right: 0;
    z-index: 3;
  }
`;

export const TextAreaEmojiPickerButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 5px;
  right: 10px;
`;

export const TextAreaElement = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: ${({ theme }) => `1px solid ${theme.colors.accent[800]}`};
  border-radius: 4px;
  padding: 10px 25px 10px 10px;
  background-color: ${({ theme }) => theme.colors.accent[100]};
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[800]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.accent[700]};
  }

  ${MediaQueries.BIGGER_THAN_SMALL} {
    min-height: 145px;
  }
`;
