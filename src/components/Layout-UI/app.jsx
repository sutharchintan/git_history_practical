import React from "react";
import { AppContextWrapper } from "./app-context-wrapper";
import { ThemeProvider } from "../../common/contexts";
import { AppRoutes } from "./app-routes";

export const App = () => {
  return (
    <ThemeProvider>
      <AppContextWrapper>
        <AppRoutes />
      </AppContextWrapper>
    </ThemeProvider>
  );
};
