import React from "react";
import { layoutStyle } from "./styles";
import { TableProvider } from "../../common/contexts";
import { useLayout } from "../../common/hooks";

/**
 * component for main content wrapper
 * @param {*} param0
 * @returns
 */
export const MainContentWrapper = ({ children }) => {
  /**
   * classes using layout style
   */
  const classes = layoutStyle();

  /**
   * use layout hooks
   */
  const { showSidebar } = useLayout();

  /**
   * return main content elements
   */
  return (
    <TableProvider>
      <div
        className={showSidebar ? classes.mainContent : classes.mainContent_m}
      >
        {children}
      </div>
    </TableProvider>
  );
};
