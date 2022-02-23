import React from "react";
import { Drawer, IconButton, Divider, List, Typography } from "@material-ui/core";
import { useLayout, useTheme } from "../../common/hooks";
import { layoutStyle } from "./styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { MenuLinkItem } from "./menu-link-item";

/**
 * side bar component
 * @returns
 */
export const Sidebar = () => {
  /**
   * classes using layout style
   */
  const classes = layoutStyle();

  /**
   * use layout hooks
   */
  const { menuItems, showSidebar, updateActiveMenuItem, updateSidebarStatus } =
    useLayout();

  /**
   * use current theme
   */
  const { currentTheme } = useTheme();

  /**
   * handle selected menu item
   * @param {*} selectedItem 
   */
  const handleSelectedMenuItem = (selectedItem) => {
    updateActiveMenuItem(selectedItem);
  };

  /**
   * handle drawer close
   */
  const handleDrawerClose = () => {
    updateSidebarStatus(false);
  };

  /**
   * get menu items
   * @returns 
   */
  const getMenuItems = () => {
    return (
      <List style={{ padding: 0, marginTop: 0 }}>
        {menuItems &&
          menuItems.map((menuItem, index) => {
            return (
              <MenuLinkItem
                keyIndex={index}
                key={index}
                model={menuItem}
                handleSelectedMenuItem={handleSelectedMenuItem}
              />
            );
          })}
      </List>
    );
  };

  return (
    <Drawer
      variant="permanent"
      className={
        showSidebar
          ? `${classes.drawer} ${classes.drawerOpen}`
          : `${classes.drawer} ${classes.drawerClose}`
      }
      classes={{
        paper: showSidebar ? classes.drawerOpen : classes.drawerClose,
      }}
      open={showSidebar}
    >
      <div className={`${classes.toolbar} ${classes.menuTopItem}`}>
        <Typography variant="h4">
            Git History
        </Typography>
        <IconButton className={classes.primary} onClick={handleDrawerClose}>
          {currentTheme && currentTheme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
      </div>
      <Divider />
      {getMenuItems(classes)}
      <Divider />
    </Drawer>
  );
};
