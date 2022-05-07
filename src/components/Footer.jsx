import React from "react";
import bitcoin from "../image/bitcoin.svg";
import mastercard from "../image/mastercard.svg";
import paypal from "../image/paypal.svg";
import stripe from "../image/stripe.svg";
import { FaCoins } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import { Logo } from "../styles/Navbar_styled";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import {
  Container,
  ImageCon,
  Image,
  FooterTop,
  FooterBottom,
  SocialIcons,
} from "../styles/Footer_styled";

function Footer({ hiddenImage }) {
  const year = new Date().getFullYear();

  return (
    <Container>
      {!hiddenImage && (
        <ImageCon>
          <Fade bottom delay={300} duration={500}>
            <Image src={bitcoin} />
          </Fade>
          <Fade bottom delay={400} duration={500}>
            <Image src={mastercard} />
          </Fade>
          <Fade bottom delay={500} duration={500}>
            <Image src={stripe} />
          </Fade>
          <Fade bottom delay={600} duration={500}>
            <Image src={paypal} />
          </Fade>
        </ImageCon>
      )}
      <FooterTop>
        <Fade left delay={300} duration={800}>
          <span>
            <Logo to="/">
              <FaCoins />
              <h2>Buddget</h2>
            </Logo>
            <h5>&copy;{year} Buddget.com All rights reserved.</h5>
          </span>
        </Fade>
        <Fade right delay={300} duration={800}>
          <SocialIcons>
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaInstagram} />
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaTiktok} />
          </SocialIcons>
        </Fade>
      </FooterTop>
      <FooterBottom>
        <Fade delay={400}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, hic
            commodi odit perspiciatis ad laboriosam vero cum expedita
            repudiandae quis error sit velit. Non sed, quis consectetur
            aspernatur facilis inventore ab ipsa sit reiciendis maiores quia
            quod iure, amet totam? Itaque, esse soluta? Blanditiis, quae ea,
            impedit fugiat inventore, dolores nostrum maxime doloribus quisquam
            commodi delectus earum consequatur tempora minima tempore? Beatae
            libero animi dignissimos impedit quibusdam provident ratione illum
            optio voluptas repudiandae nihil nesciunt nostrum sunt minus quidem,
            ut incidunt! Suscipit exercitationem expedita maxime iure aspernatur
            libero ex amet perspiciatis voluptatem nobis, tempora facilis modi
            mollitia quaerat et commodi?
          </p>
          <p>
            Developed by
            <a href="https://github.com/Noppawat3939" target="_blank">
              NPW.3939
            </a>
          </p>
        </Fade>
      </FooterBottom>
    </Container>
  );
}

export default Footer;
