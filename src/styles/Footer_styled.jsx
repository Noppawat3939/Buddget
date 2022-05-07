import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5%;
`;

export const FooterTop = styled.div`
  color: ${({ theme }) => theme.fontColor.desc};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  > span {
    display: flex;
    align-items: center;

    > h5 {
      font-weight: 600;
      margin-left: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;

    > span {
      flex-direction: column;
      row-gap: 10px;

      > h5 {
        margin: 8px 0;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.bgColor.footer};

  > p {
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 1.3px;
    text-align: justify;
    max-width: 80%;
    margin: auto;
    font-weight: 300;
    color: ${({ theme }) => theme.fontColor.body};
    display: flex;

    > a {
      color: ${({ theme }) => theme.fontColor.body};
      margin-left: 5px;
      transition: 0.3s ease-in-out;

      &:hover {
        color: #5454c5;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  margin: 10px 0;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
`;

export const ImageCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 8% 0;
`;

export const Image = styled.img`
  max-width: 180px;
  filter: grayscale(1);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 60px;
  }
`;
