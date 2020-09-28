import styled, { css } from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { Button } from 'app/components';

export const messageColors = {
  default: '#bdbdbd',
  error: '#e57878',
  success: '#78e5d5',
};

const dragActive = css`
  border-color: ${messageColors.success};
`;

const dragReject = css`
  border-color: ${messageColors.error};
`;

export const UploaderContainer = styled.div<{ isDragActive: boolean; isDragReject: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  border: 1px dashed ${messageColors.default};
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  padding: 15px 0;
  ${({ isDragActive }) => isDragActive && dragActive};
  ${({ isDragReject }) => isDragReject && dragReject};

  ${MediaQueries.BIGGER_THAN_SMALL} {
    height: 180px;
  }
`;

export const UploaderMessage = styled.p<{ type: 'default' | 'error' | 'success' }>`
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ type }) => messageColors[type || 'default']};
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const UploaderButton = styled(Button)`
  width: 190px;
`;
