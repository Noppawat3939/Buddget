import React, { useRef } from "react";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../context/BudgetsContext";
import {
  Container,
  Header,
  CloseBtn,
  Form,
  Button,
} from "../styles/AddExpense_styled";

function AddExpense({ addExpenseBudgetId }) {
  const descriptionRef = useRef(null);
  const amountRef = useRef(null);
  const budgetIdRef = useRef(null);

  const { addExpense, budgets, setShowExpense } = useBudgets();

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });

    setShowExpense(false);
  };

  const budget = budgets.find((bud) => bud.id === addExpenseBudgetId);

  return (
    <Container>
      <Header>
        <h1>New Expense {budget?.name}</h1>
        <CloseBtn onClick={() => setShowExpense(false)} />
      </Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" ref={descriptionRef} required id="description" />
        </div>
        <div>
          <label htmlFor="description">Amount:</label>
          <input type="text" ref={amountRef} min={0} step={0.01} required />
        </div>
        <div>
          <label htmlFor="description">Budget:</label>
          <select
            ref={budgetIdRef}
            id="budgetId"
            defaultValue={addExpenseBudgetId}
          >
            <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit">Add Expense</Button>
      </Form>
    </Container>
  );
}

export default AddExpense;
