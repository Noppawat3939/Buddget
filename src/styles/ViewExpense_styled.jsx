import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.bgColor.card_budget};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: -1px 2px 8px 2px rgba(0, 0, 0, 0.08);
  transition: 0.4s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor.header_budget};
  padding: 8px 15px;

  > h1 {
    letter-spacing: 2px;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    text-transform: capitalize;
  }
`;

export const CloseBtn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff004d !important;
  cursor: pointer;
`;

export const ExpenseList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.fontColor.body};
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  > span > svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.bgColor.header_budget};
  }

  > span {
    display: flex;
    align-items: center;

    > button {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-left: 8px;
      border: 0;
      background: ${({ theme }) => theme.bgColor.header_budget};
      color: #fff;
    }
  }
`;

export const ClearBtn = styled.button`
  background-color: #ff004d !important;
  border: 0;
  margin-left: 50%;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 15px;
  border-radius: 30px;
  color: #fff;
  transform: translateX(-50%);
  margin-top: 20px;
  margin-bottom: 20px;
`;
