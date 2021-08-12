import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <li className="navListItem" key={route.path}>
            <NavLink
              to={route.path}
              exact={route.exact}
              className="navLink"
              activeClassName="navLinkActive"
            >
              {route.name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
