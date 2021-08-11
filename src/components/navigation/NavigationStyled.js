import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
    justify-content: flex-end;
  }
  .navListItem:not(:last-child) {
    margin-right: 10px;
  }
  .navLink {
    text-decoration: none;
    font-weight: 700;
    color: black;
  }
  .navLinkActive {
    color: white;
  }
`;
