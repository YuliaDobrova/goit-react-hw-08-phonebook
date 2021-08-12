import React from "react";
import AuthNav from "../navigation/AuthNav";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  // const Header = ({isAuthenticated}) => {
  return (
    <HeaderContainer>
      <Navigation />
      {/* {isAuthenticated ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
    </HeaderContainer>
  );
};

export default Header;
