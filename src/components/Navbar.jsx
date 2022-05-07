import React, { useState, useEffect } from "react";
import { FaCoins, FaRegSun, FaRegMoon } from "react-icons/fa";
import { Nav, Logo, ThemeButton } from "../styles/Navbar_styled";

function Navbar({ ThemeToggle, theme }) {
  const [scalNav, setScalNav] = useState(false);

  const controlNav = () => {
    window.scrollY > 80 ? setScalNav(true) : setScalNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <Nav scalNav={scalNav}>
      <Logo to="/">
        <FaCoins />
        <h2>Buddget</h2>
      </Logo>
      <ThemeButton onClick={ThemeToggle} theme={theme}>
        {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
      </ThemeButton>
    </Nav>
  );
}

export default Navbar;
