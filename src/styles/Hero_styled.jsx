import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
  }

  > h1 {
    font-size: 15rem;
    letter-spacing: 5px;
    background: url("https://images.unsplash.com/photo-1639815189096-f75717eaecfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
    background-size: cover;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: hero 15s infinite linear;
  }

  @keyframes hero {
    from {
      background-position: top;
    }
    to {
      background-position: bottom;
    }
  }

  > div > p {
    font-size: 1.75rem;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.fontColor.body};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    > h1 {
      font-size: 9rem;
    }

    > div {
      row-gap: 20px;

      > p {
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    > h1 {
      font-size: 4.5rem;
    }

    > div > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 300px) {
    > h1 {
      font-size: 3rem;
    }
  }
`;

export const Button = styled(NavLink)`
  background: ${({ theme }) => theme.bgColor.main_alt};
  color: white;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 30px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em ${({ theme }) => theme.bgColor.main};
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  margin-right: 20px;

  > div {
    background: #fff !important;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 30px;
    box-shadow: 0.1em 0.1em 0.6em 0.2em ${({ theme }) => theme.bgColor.main};
    right: 0.3em;
    transition: all 0.3s;
  }

  &:hover > div {
    width: calc(100% - 0.6em);
  }

  > div > svg {
    width: 1.1em;
    font-size: 1.3em;
    transition: transform 0.3s;
    color: #5454c5 !important;
  }
`;
