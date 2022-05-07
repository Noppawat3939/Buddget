import React, { createContext, useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const BudegetsContext = createContext();

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export const useBudgets = () => {
  return useContext(BudegetsContext);
};

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [showBudget, setShowBudget] = useState(false);
  const [showExpense, setShowExpense] = useState(false);

  //!  ----------- theme -------------
  const [theme, setTheme] = useState("light");

  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  };

  const addBudget = ({ name, max }) => {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  };

  const deleteBudget = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.map((expense) => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      });
    });
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  };

  const deleteExpense = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  const addExpense = ({ description, amount, budgetId }) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  };

  return (
    <BudegetsContext.Provider
      value={{
        getBudgetExpenses,
        addBudget,
        addExpense,
        deleteBudget,
        deleteExpense,
        budgets,
        expenses,
        showBudget,
        setShowBudget,
        showExpense,
        setShowExpense,
        theme,
        setTheme,
      }}
    >
      {children}
    </BudegetsContext.Provider>
  );
};
