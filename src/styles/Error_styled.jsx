import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 70%;
  margin: 5% auto;
  padding: 6% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    max-width: 80%;
  }
`;

export const Content = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  > h1 {
    letter-spacing: 2px;
    font-size: 3rem;
    color: ${({ theme }) => theme.fontColor.body};
    margin-bottom: 10px;

    > span {
      color: #5454c5 !important;
    }
  }

  > p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.fontColor.desc};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-width: 80%;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;

    > h1 {
      font-size: 2rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`;

export const Button = styled(NavLink)`
  border-radius: 50px;
  border: 0;
  width: max-content;
  font-weight: 500;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 10px 30px;
  background: linear-gradient(130deg, #5f85db, #5454c5) !important;
  color: #fff !important;
`;

export const Image = styled.img`
  max-width: 220px;
  transition: 0.4s linear;
  animation: sad 5s infinite linear;

  @keyframes sad {
    from {
      transform: translateY(-8px);
    }
    to {
      transform: translateY(8px) scale(0.8);
      opacity: 0;
    }
  }
`;
