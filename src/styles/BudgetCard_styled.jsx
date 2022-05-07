import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid
    ${({ amount, max }) => {
      if (amount > max) return "#FF004D";
      else return "rgba(255,255,255,.1)";
    }};
  padding: 20px 30px;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px 15px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  letter-spacing: 1.5px;
  font-size: 24px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme }) => theme.fontColor.main};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 20px;
  }
`;

export const BudgetAmount = styled.h3`
  color: ${({ theme }) => theme.fontColor.body};
  font-size: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;

  > span {
    font-size: 15px;
    color: ${({ theme }) => theme.fontColor.desc};
  }
`;

export const Progressbar = styled.div`
  height: 30px;
  padding: 5px;
  background: #393e46 !important;
  box-shadow: inset -2px 2px 10px -1px rgba(0, 0, 0, 0.3);
  border-radius: 35px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Progress = styled.div`
  height: 100%;
  border-radius: 30px;
  box-shadow: 3px 0 3px 1px rgba(0, 0, 0, 0.1);
  width: ${({ amount, max }) => (amount / max) * 100 + "%"};
  background-color: ${({ progress }) => {
    if (progress === "safe") return "#21E6C1";
    if (progress === "warning") return "#F6C90E";
    else return "#FF004D";
  }};
  transition: 0.4s ease all;
`;

export const ButtonCon = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 10px;
  margin-top: 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-weight: 700;
  font-size: 15px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  background: ${({ primary }) => (primary ? "#5454c5" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#5454c5")};
  border: 2px solid #5454c5;
  margin: 8px 0;

  > svg {
    margin-left: 8px;
    font-size: 20px;
  }
`;
