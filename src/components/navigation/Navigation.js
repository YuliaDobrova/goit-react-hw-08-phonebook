import React from "react";
import { NavLink } from "react-router-dom";
// import { mainRoutes } from "../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className="navList">
        <li className="navListItem">
          <NavLink
            to="/"
            exact
            className="navLink"
            activeClassName="navLinkActive"
          >
            Home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to="/contacts"
            exact
            className="navLink"
            activeClassName="navLinkActive"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;

// =====================================
// <ul className="navList">
//     {mainRoutes.map((route) => (
//       <li className="navListItem" key={route.path}>
//         <NavLink
//           to={route.path}
//           exact={route.exact}
//           className="navLink"
//           activeClassName="navLinkActive"
//         >
//           {route.name.toUpperCase()}
//         </NavLink>
//       </li>
//     ))}
//   </ul>
