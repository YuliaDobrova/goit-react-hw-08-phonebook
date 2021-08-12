import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { MainContainer } from "./MainStyled";
import Loader from "react-loader-spinner";

const Main = () => {
  return (
    <MainContainer>
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#40e0d0" height={70} width={70} />
        }
      >
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
