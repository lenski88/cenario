import React from "react";
import { Container } from "./styled/Container.styled";
import {
  StyledHeader,
  Nav,
  Logo,
  TopHeader,
  HeaderForm,
  HeaderImageBlock,
  Image,
} from "./styled/StyledHeader.styled";
import { Button } from "./styled/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <TopHeader>
        <p>eCommerce Funnel Analytics. Try it free now.</p>
        <Button>Get Cenario</Button>
      </TopHeader>
      <Container>
        <Nav>
          <Logo src="./img/logo.svg" alt="logo" />
          <ul>
            <li>
              <a href="#">Integration</a>
            </li>
            <li>
              <a href="#">SaaS</a>
            </li>
            <li>
              <a href="#">Shopify</a>
            </li>
            <li>
              <Button>Try Free Demo!</Button>
            </li>
            <li>
              <Button width="103px" bg="#FFFFFF" color="#5E4DCC">
                Login
              </Button>
            </li>
          </ul>
        </Nav>
        <h1>Understanding data is hard.</h1>
        <h4>We make it simple.</h4>
        <p>
          Focus on making better data-informed eCommerce decisions for growth.
        </p>
        <HeaderForm>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <Button>Try Free Now</Button>
        </HeaderForm>
        <HeaderImageBlock>
          <Image left="-5%" top="0%" src="./img/Rectangle.jpg" alt="" />
          <Image left="17%" top="20%" src="./img/Rectangle1.jpg" alt="" />
          <Image left="79%" top="-10%" src="./img/Rectangle2.jpg" alt="" />
        </HeaderImageBlock>
      </Container>
    </StyledHeader>
  );
}
