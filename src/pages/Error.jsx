import React from "react";
import Footer from "../components/Footer";
import sad from "../image/sad.png";
import { Container, Content, Button, Image } from "../styles/Error_styled";

function Error() {
  return (
    <>
      <Container>
        <Content>
          <h1>
            <span>Opps!</span> Page not found
          </h1>
          <p>
            Sorry, the page you're looking for doesn't exist. Would you like to
            go back to the home page instead?
          </p>
          <Button to={"/"}>Back to home</Button>
        </Content>
        <Image src={sad} />
      </Container>
      <Footer hiddenImage />
    </>
  );
}

export default Error;
