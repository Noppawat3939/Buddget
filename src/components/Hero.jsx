import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useBudgets } from "../context/BudgetsContext";
import Fade from "react-reveal/Fade";
import { Container, Title, Button } from "../styles/Hero_styled";

function Hero({ budgetPage }) {
  const { theme } = useBudgets();
  return (
    <Container>
      <Fade delay={500} duration={1500}>
        <Title>
          <h1 theme={theme}>Buddget</h1>
          {!budgetPage && (
            <div>
              <Button to="/budget">
                Get Started
                <div>
                  <IoMdArrowRoundForward />
                </div>
              </Button>
              <p>Let us help you plan your budget even easier.</p>
            </div>
          )}
        </Title>
      </Fade>
    </Container>
  );
}

export default Hero;
