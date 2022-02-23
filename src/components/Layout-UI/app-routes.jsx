import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { SpinnerUI } from "../Layout-UI/spinner-ui";
import { AlertNotification } from "../Layout-UI/alert-notification";
import { componentRoutes } from "../../common/constants";
import PrivateRoute from "../Layout-UI/private-route";

const Home = lazy(() => import("./home"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<SpinnerUI />}>
      <Switch>
        <PrivateRoute path={componentRoutes.home} component={Home} />
      </Switch>
      <AlertNotification />
    </Suspense>
  );
};
