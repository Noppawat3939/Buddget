import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > h2 {
    color: ${({ theme }) => theme.fontColor.body};
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    width: 60%;

    > span {
      color: #5454c5 !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    > h2 {
      font-size: 1.35rem;
      max-width: 100%;
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    > h2 {
      width: 90%;
      margin-bottom: 10px;
    }
  }
`;

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;

  > div {
    background: ${({ theme }) => theme.bgColor.card};
    border-radius: 50px;
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
    padding: 10px;
    width: 350px;
    margin-bottom: 10px;
    border: 1.5px solid ${({ theme }) => theme.bdColor.card};
    box-shadow: 0 1px 12px 2px rgba(0, 0, 0, 0.07);
  }

  > span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.fontColor.desc};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    > div {
      max-width: max-content;
      padding: 5px;
      column-gap: 0;
    }

    > span {
      font-size: 12px;
    }
  }
`;

export const Input = styled.input`
  padding: 8px;
  background: transparent;
  font-size: 15px;
  color: ${({ theme }) => theme.fontColor.body};

  ::placeholder {
    font-weight: 700;
    letter-spacing: 1.2px;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 50px;
  border: 0;
  font-weight: 600;
  font-size: 16px;
  padding: 5px;
  background: linear-gradient(130deg, #5f85db, #5454c5) !important;
  color: #fff !important;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 25px;
  }
`;
