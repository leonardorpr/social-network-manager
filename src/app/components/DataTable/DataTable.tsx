import React, { memo, useCallback } from 'react';

import {
  DataTableContainer,
  DataTableElement,
  DataTableRowHeader,
  DataTableColumnHeader,
  DataTableRowData,
  DataTableColumnData,
} from './DataTable.styles';

interface IDataTableProps {
  config: {
    key: string;
    name: string;
    centralized: boolean;
    HeaderComponent?(): React.ReactNode;
    DataComponent?(row: any): React.ReactNode;
  }[];
  rows: any[];
}

const DataTable: React.FC<IDataTableProps> = ({ config, rows }) => {
  const renderHeader = useCallback(() => {
    const mappedHeader = config.map(({ key, name, centralized, HeaderComponent }) => (
      <DataTableColumnHeader centralized={centralized} key={key}>
        {HeaderComponent ? HeaderComponent() : name}
      </DataTableColumnHeader>
    ));

    return mappedHeader;
  }, [config]);

  const renderConfig = useCallback(
    (row: any) => {
      const mappedConfig = config.map(({ key, centralized, DataComponent }) => (
        <DataTableColumnData centralized={centralized}>
          {DataComponent ? DataComponent(row) : row[key]}
        </DataTableColumnData>
      ));

      return mappedConfig;
    },
    [config],
  );

  const renderRows = useCallback(() => {
    const mappedRows = rows.map((row) => <DataTableRowData key={row.id}>{renderConfig(row)}</DataTableRowData>);

    return mappedRows;
  }, [rows, renderConfig]);

  return (
    <DataTableContainer>
      <DataTableElement>
        <thead>
          <DataTableRowHeader>{renderHeader()}</DataTableRowHeader>
        </thead>
        <tbody>{renderRows()}</tbody>
      </DataTableElement>
    </DataTableContainer>
  );
};

export default memo(DataTable);
