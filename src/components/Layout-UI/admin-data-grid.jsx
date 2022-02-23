import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { pagerDefaultSettings } from "../../common/constants";

export const AdminDataGrid = ({
  data,
  columns,
  hasMoreRecords,
  lazyLoading,
  loading,
  setPage,
  setPageSize,
  onFilterChanged,
}) => {
  const [currentFilter, setCurrentFilter] = useState({});

  const handleFilterChange = (criteria) => {
    let field = criteria?.items?.[0]?.columnField;
    let operator = criteria?.items?.[0]?.operatorValue;
    let value = criteria?.items?.[0]?.value;

    let filter = { field: field, operator: operator, value: value };

    if (filter != currentFilter && field && operator && (value || operator === "isNotEmpty" || operator === "isEmpty")) {
      setCurrentFilter(filter);
      onFilterChanged(filter);
    } else if (!value) {
      setCurrentFilter({});
      onFilterChanged({});
    }
  };

  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={pagerDefaultSettings.pageSize}
      rowsPerPageOptions={pagerDefaultSettings.pageOptions}
      onPageChange={lazyLoading ? (newPage) => setPage(newPage) : undefined}
      onPageSizeChange={
        lazyLoading ? (newPageSize) => setPageSize(newPageSize) : undefined
      }
      components={{
        Toolbar: GridToolbar,
      }}
      paginationMode={lazyLoading ? "server" : "client"}
      loading={loading}
      autoHeight={true}
      rowCount={100}
      getRowId={(row) => row.zmId}
      filterMode={onFilterChanged ? "server" : "client"}
      onFilterModelChange={onFilterChanged ? handleFilterChange : undefined}
      
    />
  );
};
