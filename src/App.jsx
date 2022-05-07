import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Budget from "./components/Budget";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { ThemeProvider } from "styled-components";
import {
  BudgetGlobalStyle,
  lightTheme,
  darkTheme,
} from "./styles/Globalstyled";
import Navbar from "./components/Navbar";
import { useBudgets } from "./context/BudgetsContext";

URL =
  "https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json";

function App() {
  const { theme, setTheme } = useBudgets();
  const ThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <BudgetGlobalStyle />
        <Navbar ThemeToggle={ThemeToggle} theme={theme} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
