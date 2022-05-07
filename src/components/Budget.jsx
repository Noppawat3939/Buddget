import React, { useState } from "react";
import BudgetCard from "./BudgetCard";
import AddBudget from "./AddBudget";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";
import AddExpense from "./AddExpense";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";
import ViewExpense from "./ViewExpense";
import Hero from "./Hero";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import {
  Grid,
  AddBox,
  Button,
  Section,
  AllBox,
  MiddleBox,
} from "../styles/Budget_styled";

function Budget() {
  const {
    budgets,
    getBudgetExpenses,
    showBudget,
    showExpense,
    setShowBudget,
    setShowExpense,
  } = useBudgets();
  const [addExpenseBudgetId, setAddExpenseBudgetId] = useState(null);
  const [viewExpenseBudgetId, setViewExpenseBudgetId] = useState(null);

  const openAddExpense = (budgetId) => {
    setShowExpense(true);
    setAddExpenseBudgetId(budgetId);
  };

  return (
    <div>
      <Hero budgetPage />
      <Section>
        <Fade delay={300} duration={1000} bottom>
          <MiddleBox>
            <AddBox>
              <h1>
                Add your <span>budget</span> is here
              </h1>
              <Button primary onClick={() => setShowBudget(true)}>
                Add Budget
              </Button>
            </AddBox>
            <AddBox>
              <h1>
                Add your <span>expense</span> is here
              </h1>
              <Button onClick={openAddExpense}>Add Expense</Button>
            </AddBox>
          </MiddleBox>
        </Fade>
        <AllBox>
          {showBudget && <AddBudget />}
          {showExpense && (
            <AddExpense addExpenseBudgetId={addExpenseBudgetId} />
          )}
          <ViewExpense
            budgetId={viewExpenseBudgetId}
            handleClose={() => setViewExpenseBudgetId()}
          />
        </AllBox>
      </Section>
      <Grid>
        {budgets.map((budget) => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              max={budget.max}
              name={budget.name}
              amount={amount}
              openAddExpense={() => openAddExpense(budget.id)}
              setViewExpenseBudgetId={() => setViewExpenseBudgetId(budget.id)}
            />
          );
        })}
        <UncategorizedBudgetCard
          openAddExpense={openAddExpense}
          setViewExpenseBudgetId={() =>
            setViewExpenseBudgetId(UNCATEGORIZED_BUDGET_ID)
          }
        />
        <TotalBudgetCard />
      </Grid>
      <Footer hiddenImage />
    </div>
  );
}

export default Budget;
