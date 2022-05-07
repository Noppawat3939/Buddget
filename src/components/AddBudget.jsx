import React, { useRef } from "react";
import { useBudgets } from "../context/BudgetsContext";
import {
  Container,
  Header,
  Form,
  CloseBtn,
  Button,
} from "../styles/AddBudget_styled";

function AddBudget() {
  const nameRef = useRef(null);
  const maxRef = useRef(null);
  const { addBudget, setShowBudget } = useBudgets();

  const handleSubmit = (e) => {
    e.preventDefault();

    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });

    setShowBudget(false);
  };

  return (
    <Container>
      <Header>
        <h1>New Budget</h1>
        <CloseBtn onClick={() => setShowBudget(false)} />
      </Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" ref={nameRef} required />
        </div>
        <div>
          <label htmlFor="spend">Maximum Spending:</label>
          <input type="number" min={0} step={0.01} ref={maxRef} required />
        </div>
        <Button type="submit">Add Budget</Button>
      </Form>
    </Container>
  );
}

export default AddBudget;
