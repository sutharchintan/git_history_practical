import React, { Suspense, lazy, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { componentRoutes } from "../../common/constants";
import { MainContentWrapper } from "./main-content-wrapper";

const GitCommitsListing = lazy(() =>
  import("../Git-Components/git-commits-list")
);

import { SpinnerUI } from "./spinner-ui";

export const MainContent = () => {
  const renderRoutes = () => {
    return (
      <Fragment>
        <Suspense fallback={<SpinnerUI />}>
          <Switch>
            <Route exact path="/" component={GitCommitsListing} />
            <Route
              path={componentRoutes.git_commits}
              component={GitCommitsListing}
            />
          </Switch>
        </Suspense>
      </Fragment>
    );
  };

  return <MainContentWrapper>{renderRoutes()}</MainContentWrapper>;
};
