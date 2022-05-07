import React from "react";
import about1 from "../image/about1.png";
import about2 from "../image/about2.png";
import AboutEmail from "./AboutEmail";
import Fade from "react-reveal/Fade";
import { Container, Header, Section, Image } from "../styles/About_styled";

function About() {
  return (
    <Container>
      <Header>
        <Fade bottom delay={300} duration={1200}>
          <h1>Easy Money Metters</h1>
        </Fade>
        <Fade bottom delay={500} duration={1500}>
          <p>
            Budgeting should't be boring, it should be fun and easy. Pennies is
            a fresh new way to look after your money and is unlike anything
            you've ever seen or used before. It's personal finance, made easy.
            It's your money, made simple.
          </p>
        </Fade>
      </Header>
      <Section>
        <div>
          <Fade left delay={300} duration={1200}>
            <h2>
              <span>Increase</span> your monthly budget
            </h2>
          </Fade>
          <Fade right delay={500} duration={1200}>
            <Image src={about1} />
          </Fade>
        </div>
        <div>
          <Fade right delay={300} duration={1200}>
            <h2>
              <span>Create</span> an expense list.
            </h2>
          </Fade>
          <Fade left delay={500} duration={1200}>
            <Image src={about2} />
          </Fade>
        </div>
      </Section>
      <AboutEmail />
    </Container>
  );
}

export default About;
