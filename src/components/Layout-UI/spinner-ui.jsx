import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

export const SpinnerUI = () => {
  const zIndexValue = 10000;

  return (
    <Box
      style={{
        display: "flex",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        background: "#000000",
        opacity: 0.5,
        zIndex: zIndexValue,
      }}
    >
      <CircularProgress style={{ margin: "auto", zIndex: zIndexValue + 1 }} />
    </Box>
  );
};
