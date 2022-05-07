import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease all;
  padding: ${({ scalNav }) => (scalNav ? "15px 20px" : "20px 35px")};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgColor.body};
  z-index: 999;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;

  > svg {
    background: linear-gradient(130deg, #5f85db, #5454c5) !important;
    color: #fff;
    border-radius: 10px;
    font-size: 2.7rem;
    padding: 10px;
    margin-right: 10px;
    transition: 0.3s ease all;
  }

  > h2 {
    letter-spacing: 2px;
    font-size: 24px;
    color: ${({ theme }) => theme.fontColor.title};
  }
`;

export const ThemeButton = styled.div`
  width: 60px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid
    ${({ theme }) => (theme === "light" ? "lightgray" : "#5454c5")};
  box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;

  > svg {
    position: absolute;
    left: ${({ theme }) => (theme === "light" ? "5px" : "35px")};
    transition: 0.4s linear;
    font-size: 20px;
    color: ${({ theme }) => (theme === "light" ? "#111" : "#5454c5")};
  }
`;
