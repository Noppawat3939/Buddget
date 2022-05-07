import React from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { currencyFormat } from "../utils/Utils";
import {
  Container,
  Header,
  CloseBtn,
  ExpenseList,
  ClearBtn,
} from "../styles/ViewExpense_styled";

function ViewExpense({ budgetId, handleClose }) {
  const { getBudgetExpenses, deleteBudget, deleteExpense, budgets } =
    useBudgets();

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? {
          name: "Uncategorized",
          id: UNCATEGORIZED_BUDGET_ID,
        }
      : budgets.find((bud) => bud.id === budgetId);

  return (
    <>
      {budget !== undefined && (
        <Container>
          <Header>
            <h1>Expense {budget?.name}</h1>
            <CloseBtn onClick={handleClose} />
          </Header>
          <div>
            <ul>
              {getBudgetExpenses(budgetId).map((expense) => (
                <ExpenseList key={expense.id}>
                  <span>
                    <BsPatchCheckFill />
                    {expense.description}
                  </span>
                  <span>
                    {currencyFormat.format(expense.amount)}
                    <button onClick={() => deleteExpense(expense)}>
                      <MdDeleteOutline />
                    </button>
                  </span>
                </ExpenseList>
              ))}
            </ul>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <ClearBtn
                onClick={() => {
                  deleteBudget(budget);
                  handleClose();
                }}
              >
                Clear
              </ClearBtn>
            )}
          </div>
        </Container>
      )}
    </>
  );
}

export default ViewExpense;
