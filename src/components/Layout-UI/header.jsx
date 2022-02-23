import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
} from "@material-ui/core";
import {
  Menu,
  Mail,
  PowerSettingsNew,
  Notifications,
  AccountCircle,
} from "@material-ui/icons";
import { useLayout } from "../../common/hooks";
import { layoutStyle } from "./styles";

/**
 * admin header component
 * @returns
 */
export const Header = () => {
  /**
   * classes using layout style
   */
  const classes = layoutStyle();

  /**
   * use layout hooks
   */
  const { showSidebar, updateSidebarStatus } = useLayout();

  /**
   * handle logout
   */
  const handleLogout = () => {};

  /**
   * handle sidebar open
   */
  const handleSideBarOpen = () => {
    updateSidebarStatus(true);
  };

  /**
   * render notification
   * @returns
   */
  const renderNotification = () => {
    return (
      <IconButton
        color="inherit"
        style={{ float: "right" }}
        title="Notifications"
      >
        <Badge badgeContent={5}>
          <Notifications />
        </Badge>
      </IconButton>
    );
  };

  /**
   * return app bar elements
   */
  return (
    <AppBar
      position="fixed"
      className={
        showSidebar
          ? `${classes.appBar} ${classes.appBarShift}`
          : classes.appBar
      }
    >
      <Toolbar
        disableGutters={!showSidebar}
        style={{ justifyContent: "center" }}
      >
        <IconButton
          color="inherit"
          aria-label="Open sidebar drawer"
          onClick={handleSideBarOpen}
          className={
            showSidebar
              ? `${classes.menuButton} ${classes.hide}`
              : classes.menuButton
          }
        >
          <Menu />
        </IconButton>

        <Typography style={{ flex: 1 }} variant="h6" color="inherit">
             Git Commits
        </Typography>

        <div>
          <IconButton
            style={{ float: "right" }}
            color="inherit"
            title="Account"
          >
            <AccountCircle />
          </IconButton>

          <IconButton
            color="inherit"
            style={{ float: "right" }}
            onClick={handleLogout}
            title="Logout"
          >
            <PowerSettingsNew />
          </IconButton>

          {renderNotification()}

          <IconButton color="inherit" style={{ float: "right" }} title="Mail">
            <Mail />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
