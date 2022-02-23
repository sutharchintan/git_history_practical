import { makeStyles } from "@material-ui/core";

const drawerWidth = 280;
const headerHeight = 65;
const minimizedDrawerWidth = 80;

export const layoutStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    noTextDecoration: {
      textDecoration: "none",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: theme.palette.primary.main,
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing() * 7 + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing() * 9 + 1,
      },
      backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
    },
    primary: {
      color: `${theme.palette.primary.contrastText} !important`,
      fontSize: 15,
    },
    primaryActive: {
      color: `${theme.palette.primary.main} !important`,
      fontSize: 15,
    },
    menuTopItem: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      position: "relative",
    },
    menuList: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    menuListActive: {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    list: {
      width: drawerWidth,
    },
    links: {
      textDecoration: "none",
    },
    menuHeader: {
      paddingLeft: "30px",
    },
    mainContent: {
      height: `calc(100vh - ${headerHeight}px)`,
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      marginTop: headerHeight,
      overflow: "auto",
    },
    mainContent_m: {
      height: `calc(100vh - ${headerHeight}px)`,
      width: `calc(100% - ${minimizedDrawerWidth}px)`,
      marginLeft: minimizedDrawerWidth,
      marginTop: headerHeight,
      overflow: "auto",
    },
  };
});

export const tableStyle = makeStyles((theme) => {
  return {
    table_pager: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing() * 2.5,
    },
    sort_arrow: {
      height: 10,
      width: 10,
      paddingLeft: 5,
    },
  };
});

export const sectionStyle = makeStyles((theme) => {
  return {
    sectionTitle: {
      minHeight: "50px !important",
      height: 50,
      backgroundColor: "#f0f0f0",
    },
  };
});
