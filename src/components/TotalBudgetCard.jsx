import React from "react";
import { useBudgets } from "../context/BudgetsContext";
import BudgetCard from "./BudgetCard";

function TotalBudgetCard() {
  const { budgets, expenses } = useBudgets();

  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  const max = budgets.reduce((total, budget) => total + budget.max, 0);

  if (max === 0) return null;

  return <BudgetCard amount={amount} name="Total" max={max} hidden />;
}

export default TotalBudgetCard;
