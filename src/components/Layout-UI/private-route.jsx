import React from "react";
import { Route, Redirect } from "react-router-dom";
import { componentRoutes } from "../../common/constants";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const loggedIn = true;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        loggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={componentRoutes.home} />
        )
      }
    />
  );
};

export default PrivateRoute;
