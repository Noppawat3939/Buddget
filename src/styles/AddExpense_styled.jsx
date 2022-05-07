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
  }
`;

export const CloseBtn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff004d !important;
  cursor: pointer;
`;

export const Form = styled.form`
  padding: 10px 20px;

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    margin-bottom: 20px;
  }

  > div > label {
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor.body};
  }

  > div > input {
    padding: 8px;
    border-radius: 4px;
  }

  > div > select {
    padding: 5px;
  }

  > div > select > option {
    text-transform: capitalize;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.bgColor.header_budget};
  border-radius: 30px;
  color: #fff;
  border: 0;
  padding: 8px 15px;
  letter-spacing: 1.2px;
  font-weight: 600;
  margin-left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);
`;
