import { lazy } from "react";

export const mainRoutes = [
  {
    name: "HomePage",
    path: "/",
    component: lazy(
      () => import("../pages/HomePage") /* webpackChunkName:"HomePage" */
    ),
    exact: true,
    private: false,
    restricted: false,
  },
  {
    name: "ContactsPage",
    path: "/contacts",
    component: lazy(
      () =>
        import("../pages/ContactsPage") /* webpackChunkName:"ContactsPage" */
    ),
    exact: true,
    private: true,
    restricted: false,
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName:"AuthPage" */
    ),
    exact: true,
    private: true,
    restricted: true,
  },
  {
    name: "LoginPage",
    path: "/login",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName:"AuthPage" */
    ),
    exact: true,
    private: true,
    restricted: true,
  },
];
