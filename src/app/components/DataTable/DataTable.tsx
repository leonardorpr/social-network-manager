import React, { memo } from 'react';

import {
  DataTableContainer,
  DataTableElement,
  DataTableRowHeader,
  DataTableColumnHeader,
  DataTableRowData,
  DataTableColumnData,
} from './DataTable.styles';

const DataTable: React.FC = () => (
  <DataTableContainer>
    <DataTableElement>
      <thead>
        <DataTableRowHeader>
          <DataTableColumnHeader>Month</DataTableColumnHeader>
          <DataTableColumnHeader>Savings</DataTableColumnHeader>
          <DataTableColumnHeader>Savings</DataTableColumnHeader>
          <DataTableColumnHeader>Savings</DataTableColumnHeader>
          <DataTableColumnHeader>Savings</DataTableColumnHeader>
          <DataTableColumnHeader>Savings</DataTableColumnHeader>
        </DataTableRowHeader>
      </thead>
      <tbody>
        <DataTableRowData>
          <DataTableColumnData>January</DataTableColumnData>
          <DataTableColumnData>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
        </DataTableRowData>
        <DataTableRowData>
          <DataTableColumnData>January</DataTableColumnData>
          <DataTableColumnData>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
        </DataTableRowData>
        <DataTableRowData>
          <DataTableColumnData>January</DataTableColumnData>
          <DataTableColumnData>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
          <DataTableColumnData>$100</DataTableColumnData>
        </DataTableRowData>
      </tbody>
    </DataTableElement>
  </DataTableContainer>
);

export default memo(DataTable);
