import styled from 'styled-components';

export const DataTableContainer = styled.div`
  overflow-x: auto;
`;

export const DataTableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #bdbdbd;
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[800]};
`;

export const DataTableRowHeader = styled.tr`
  height: 65px;
  background-color: ${({ theme }) => theme.colors.accent[100]};
  border-bottom: 2px solid #bdbdbd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DataTableColumnHeader = styled.th<{ centralized: boolean }>`
  min-width: 130px;
  max-width: 600px;
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  border: 1px solid #ddd;
  padding: 12px 8px;
  text-align: ${({ centralized }) => (centralized ? 'center' : 'left')};
`;

export const DataTableRowData = styled.tr`
  height: 70px;
  background-color: ${({ theme }) => theme.colors.accent[100]};

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

export const DataTableColumnData = styled.td<{ centralized: boolean }>`
  min-width: 130px;
  max-width: 600px;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: ${({ centralized }) => (centralized ? 'center' : 'left')};
`;
