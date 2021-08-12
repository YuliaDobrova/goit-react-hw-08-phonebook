import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<h2>...loading</h2>}>
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
