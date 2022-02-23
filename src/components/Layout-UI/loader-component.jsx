import React from "react";
import { useLoader } from "../../common/hooks";
import { SpinnerUI } from "./spinner-ui";

export const LoaderComponent = () => {
  const { loading } = useLoader();
  return loading ? <SpinnerUI /> : null;
};
