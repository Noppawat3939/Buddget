import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetsProvider } from "./context/BudgetsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>
);
