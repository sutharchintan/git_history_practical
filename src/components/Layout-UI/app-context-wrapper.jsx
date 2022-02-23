import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import {
  LoaderProvider,
  NotificationProvider,
  LayoutProvider,
  GitDataProvider,
} from "../../common/contexts";
import { useTheme } from "../../common/hooks";
import { CookiesProvider } from "react-cookie";
import Compose from "./compose";

export const AppContextWrapper = ({ children }) => {
  const { currentTheme } = useTheme();

  const providers = [
    LayoutProvider,
    LoaderProvider,
    NotificationProvider,
    CookiesProvider,
    GitDataProvider,
  ];

  return (
    <MuiThemeProvider theme={currentTheme}>
      <Compose components={providers}>{children}</Compose>
    </MuiThemeProvider>
  );
};
