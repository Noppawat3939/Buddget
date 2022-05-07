import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Form, Input, Button } from "../styles/AboutEmail_styled";

function AboutEmail() {
  const [text, setText] = useState("join 10,000+ members of Buddget fam.");

  const handleSubmt = (e) => {
    e.preventDefault();
    setText("Thank you for join us 🙏🏼");
  };

  return (
    <Container>
      <Fade left delay={300} duration={1200}>
        <h2>
          <span>Join the Buddget Fam</span> to get daily news that you will
          actually enjoy. For free.
        </h2>
      </Fade>
      <Fade right delay={500} duration={1200}>
        <Form onSubmit={handleSubmt}>
          <div>
            <Input type="email" placeholder="Enter Email" required />
            <Button type="submit">Join</Button>
          </div>
          <span>{text}</span>
        </Form>
      </Fade>
    </Container>
  );
}

export default AboutEmail;
