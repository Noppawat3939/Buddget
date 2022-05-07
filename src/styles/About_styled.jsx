import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  margin: 1rem auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  > h1 {
    letter-spacing: 2px;
    margin: 0 auto 20px;
    color: ${({ theme }) => theme.fontColor.main};
  }

  > p {
    max-width: 80%;
    margin: auto;
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 2rem;
    color: ${({ theme }) => theme.fontColor.desc};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    > h1 {
      font-size: 1.75rem;
    }

    > p {
      font-size: 1rem;
      max-width: 90%;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 20px;
    margin: 0 auto 1rem;

    > h2 {
      font-size: 2.2rem;
      font-weight: 600;
      letter-spacing: 1.2px;
      color: ${({ theme }) => theme.fontColor.body};

      > span {
        color: #5454c5 !important;
      }
    }

    &:hover > img {
      transform: translateY(-8px);
    }

    :nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    > div > h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    > div {
      flex-direction: column;
      text-align: center;
      margin: 0.8rem auto;

      > h2 {
        font-size: 1.35rem;
      }
    }

    > div:nth-child(2) {
      flex-direction: column;
    }
  }
`;

export const Image = styled.img`
  max-width: 380px;
  height: auto;
  object-fit: cover;
  transition: 0.4s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 200px;
  }
`;
