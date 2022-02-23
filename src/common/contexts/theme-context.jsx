import React, { createContext, useState, useCallback } from "react";
import {
  createTheme,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { themeType } from "../constants";

export const ThemeContext = createContext();

const createAdminTheme = (typeOfTheme) => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: "#0078d4",
          dark: "#034e87",
          light: "#549ed6",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#AEAEAE",
          dark: "#F5F5F5",
          light: "#616161",
        },
        type: typeOfTheme,
        typography: {
          button: {
            textTransform: "none",
          },
        },
      },
    })
  );
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    createAdminTheme(themeType.light)
  );

  const contextValue = {
    currentTheme,
    changeTheme: useCallback((type) => onChangeThemeType(type), []),
  };

  const onChangeThemeType = (typeOfTheme) => {
    const theme = createAdminTheme(typeOfTheme);
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
