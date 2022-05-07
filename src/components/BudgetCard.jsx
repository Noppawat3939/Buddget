import React from "react";
import { currencyFormat } from "../utils/Utils";
import { RiHandCoinLine, RiFileList3Line } from "react-icons/ri";
import {
  CardContainer,
  CardTitle,
  Name,
  BudgetAmount,
  Progressbar,
  Progress,
  ButtonCon,
  Button,
} from "../styles/BudgetCard_styled";

function BudgetCard({
  amount,
  max,
  name,
  openAddExpense,
  hidden,
  setViewExpenseBudgetId,
}) {
  const getProgress = (amount, max) => {
    const ratio = amount / max;
    if (ratio < 0.5) {
      return "safe";
    }
    if (ratio < 0.75) {
      return "warning";
    } else {
      return "danger";
    }
  };

  return (
    <CardContainer amount={amount} max={max}>
      <CardTitle>
        <Name>{name}</Name>
        <BudgetAmount>
          {currencyFormat.format(amount)}
          {max && <span> | {currencyFormat.format(max)}</span>}
        </BudgetAmount>
      </CardTitle>
      {max && (
        <Progressbar>
          <Progress
            progress={getProgress(amount, max)}
            amount={amount}
            max={max}
          />
        </Progressbar>
      )}
      {!hidden && (
        <ButtonCon>
          <Button primary onClick={openAddExpense}>
            Add Expense <RiHandCoinLine />
          </Button>
          <Button onClick={setViewExpenseBudgetId}>
            View Expense <RiFileList3Line />
          </Button>
        </ButtonCon>
      )}
    </CardContainer>
  );
}

export default BudgetCard;
