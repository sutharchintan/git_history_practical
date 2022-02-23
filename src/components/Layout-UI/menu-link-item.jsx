import React from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { IconComponent } from "./icon-component";
import { layoutStyle } from "./styles";

export const MenuLinkItem = ({ keyIndex, model, handleSelectedMenuItem }) => {
  const classes = layoutStyle();

  const renderListItemText = (menuItem) => {
    return (
      <ListItemText
        primary={menuItem.name}
        classes={{
          primary: menuItem.active ? classes.primaryActive : classes.primary,
        }}
      />
    );
  };

  const renderListItemIcon = (menuItem) => {
    return (
      menuItem.icon && (
        <ListItemIcon
          className={menuItem.active ? classes.primaryActive : classes.primary}
        >
          <IconComponent iconName={menuItem.icon} />
        </ListItemIcon>
      )
    );
  };

  const renderListItem = (menuItem, hasChildren) => {
    return (
      <ListItem
        title={menuItem.name}
        className={menuItem.active ? classes.menuListActive : classes.menuList}
        onClick={() => handleSelectedMenuItem(menuItem)}
        button
      >
        {renderListItemIcon(menuItem)}
        {renderListItemText(menuItem)}
        {hasChildren ? menuItem.active ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    );
  };

  const renderMenuItem = (menuItem, keyIndex) => {
    if (menuItem.children && menuItem.children.length) {
      const hasActiveItem =
        menuItem.active ||
        menuItem.children.some((childMenuItem) => {
          return childMenuItem.active === true;
        });

      return (
        <div key={keyIndex}>
          {renderListItem(menuItem, true)}
          <Collapse
            style={{ marginLeft: 4 }}
            in={menuItem.active}
            timeout="auto"
            unmountOnExit
          >
            {menuItem.children &&
              menuItem.children.map((childMenu, index) => {
                return renderMenuItem(childMenu, index);
              })}
          </Collapse>
        </div>
      );
    } else {
      return (
        <Link
          className={classes.noTextDecoration}
          to={"/" + menuItem.component}
          key={keyIndex}
        >
          {renderListItem(menuItem, false)}
        </Link>
      );
    }
  };

  return renderMenuItem(model, keyIndex);
};
