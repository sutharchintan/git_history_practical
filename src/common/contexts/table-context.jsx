import React, { useState, useCallback, createContext } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [sortingField, setSortingField] = useState();
  const [sortingDirection, setSortingDirection] = useState();

  const contextValue = {
    tableData,
    pageNumber,
    pageSize,
    totalRecords,
    sortingField,
    sortingDirection,
    loadTableData: useCallback((request) => {
      getTableData(request);
    }, []),
    updatePageNumber: useCallback((data) => {
      setPageNumber(data);
    }, []),
    updatePageSize: useCallback((data) => {
      setPageSize(data);
    }, []),
    updateTotalRecords: useCallback((data) => {
      setTotalRecords(data);
    }, []),
    changeSortingField: useCallback((data) => {
      setSortingField(data);
    }, []),
    changeSortingDirection: useCallback((data) => {
      setSortingDirection(data);
    }, []),
  };

  const getTableData = (request) => {
    // async-await call

    // set table data from here
    setTableData([]);
  };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};
