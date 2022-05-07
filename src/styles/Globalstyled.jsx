import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  /* --------- background -------- */
  bgColor: {
    body: " #f0f1f5",
    card: "rgba(250,250,250,.35)",
    main: "#5454c5",
    main_alt: " #5f85db",
    header_budget: "#393E46",
    card_budget: "#f0f1f7",
    footer: "rgb(0 0 0 / .025)",
  },
  /* --------- border -------- */
  bdColor: {
    card: "whitesmoke",
  },
  fontColor: {
    title: "#000",
    main: "#1A1A40",
    desc: "#393E46",
    icon: "#060930",
    body: "#333333",
  },
  tablet: "820px",
  mobile: "600px",
};

export const darkTheme = {
  bgColor: {
    body: "#151515",
    card: "rgba(255,255,255,.095)",
    main: "#5454c5",
    main_alt: " #5f85db",
    header_budget: "#5454c5",
    card_budget: "#222831",
    footer: "transparent",
  },
  bdColor: {
    card: "rgba(255,255,255,.1)",
  },
  fontColor: {
    title: "#fff",
    main: "#5454c5",
    desc: "#595B83",
    icon: "#5f85db",
    body: "#Ffff",
  },
  tablet: "820px",
  mobile: "600px",
};

export const BudgetGlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.bgColor.body};
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.bgColor.header_budget};
  box-shadow: 0 1px 8px 2px rgb(0 0 0 /.25);
  border-radius: 30px;
}

body {
   background: ${({ theme }) => theme.bgColor.body};
}

button {
    cursor: pointer;
}

input,
select {
    outline: none;
    border: 0;
}

a {
    text-decoration: none;
}
`;
