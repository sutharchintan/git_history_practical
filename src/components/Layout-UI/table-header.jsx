import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { sortingDirection } from "../../common/constants";
import { tableStyle } from "./styles";

export const TableHeader = ({
  columnNames,
  onSort,
  sortColumn,
  sortDirection,
}) => {
  const classes = tableStyle();

  const renderSortIndicator = (columnName) => {
    if (sortColumn === columnName) {
      if (sortDirection === sortingDirection.Ascending) {
        return <ArrowUpward className={classes.sort_arrow} />;
      } else {
        return <ArrowDownward className={classes.sort_arrow} />;
      }
    } else {
      return null;
    }
  };

  const renderColumn = (columnName, index) => {
    return (
      <TableCell
        key={index}
        onClick={() => (onSort ? onSort(columnName) : undefined)}
      >
        {columnName}
        {renderSortIndicator(columnName)}
      </TableCell>
    );
  };

  const renderColumns = () => {
    return columnNames && columnNames.length
      ? columnNames.map((c, index) => {
          return renderColumn(c, index);
        })
      : null;
  };

  return (
    <TableHead>
      <TableRow>{renderColumns()}</TableRow>
    </TableHead>
  );
};
