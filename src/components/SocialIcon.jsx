import React from "react";
import styled from "styled-components";

function SocialIcon({ Icon }) {
  return (
    <Container>
      <Icon />
    </Container>
  );
}

export default SocialIcon;

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.bgColor.card};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  > svg {
    color: ${({ theme }) => theme.fontColor.icon};
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;
