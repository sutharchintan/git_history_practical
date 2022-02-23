import React from "react";
import {
  TableContainer,
  Table,
  TablePagination,
  TableFooter,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { TableHeader } from "./table-header";
import { TablePager } from "./table-pager";
import { useTable } from "../../common/hooks";

export const ListUI = ({ columns, rows, rowActions }) => {
  const {
    tableData,
    pageNumber,
    pageSize,
    totalRecords,
    sortingField,
    sortingDirection,
    updatePageNumber,
    updatePageSize,
    changeSortingField,
    changeSortingDirection,
  } = useTable();

  const onPageChanged = () => {};

  const onChangeRowsPerPage = () => {};

  const onSorting = () => {};

  const renderTableHeader = () => {
    return (
      <TableHeader
        columnNames={columns}
        onSort={onSorting}
        sortColumn={sortingField}
        sortDirection={sortingDirection}
      />
    );
  };

  const renderTableFooter = (columnLength) => {
    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={columnLength}
            count={totalRecords}
            rowsPerPage={pageSize}
            page={pageNumber}
            onChangePage={onPageChanged}
            onChangeRowsPerPage={onChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            ActionsComponent={TablePager}
          />
        </TableRow>
      </TableFooter>
    );
  };

  const renderTableRow = (rowData, index) => {
    return (
      <TableRow key={index}>
        {columns && columns.length
          ? columns.map((c, i) => {
              return <TableCell key={i}>{rowData[c]}</TableCell>;
            })
          : null}
      </TableRow>
    );
  };

  const renderTableRows = () => {
    return tableData && tableData.length
      ? tableData.map((t, i) => {
          return renderTableRow(t, i);
        })
      : null;
  };

  const renderTableBody = () => {
    return <TableBody>{renderTableRows()}</TableBody>;
  };

  return (
    <TableContainer>
      <Table>
        {renderTableHeader()}
        {renderTableBody()}
        {renderTableFooter(columns.length)}
      </Table>
    </TableContainer>
  );
};
