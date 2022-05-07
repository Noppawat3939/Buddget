import styled from "styled-components";

export const Grid = styled.div`
  max-width: 90%;
  margin: auto;
  padding: 20px;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export const AddBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 20px;

  :nth-child(2) {
    flex-direction: row-reverse;
  }

  > h1 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.fontColor.title};

    > span {
      color: #5454c5 !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    > h1 {
      font-size: 22px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    :nth-child(2) {
      flex-direction: column;
    }

    > h1 {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#5454c5" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#5454c5")};
  border: 2px solid #5454c5;
  padding: 10px 15px;
  border-radius: 50px;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-weight: 600;
  margin-left: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "transparent" : "#5454c5")};
    color: ${({ primary }) => (primary ? "#5454c5" : "#fff")};
  }
`;

export const Section = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: auto;
`;

export const AllBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const MiddleBox = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.bgColor.body};
`;
