import React from "react";
import { Container } from "./styled/Container.styled";
import {
  StyledBody,
  QuoteBlock,
  QuoteImage,
  Square,
} from "./styled/StyledBody.styled";

export default function Body() {
  return (
    <StyledBody>
      <Container>
        <QuoteBlock>
          <Square
            bg="#5E4DCC"
            width="159px"
            height="149px"
            left="-90px"
            top="260px"
          >
            <Square
              bg="#FFD1DD"
              width="216px"
              height="206px"
              left="-26px"
              top="90px"
            ></Square>
          </Square>
          <QuoteImage src="./img/MichaelWong.svg" alt="michael wong" />
            <p>
              "Signed up for Cenario and love the instant metrics and insights
              it gives you about your business. The ability to do forecasting
              and budgeting with my real-time finances has been awesome. I can
              view the amount of runway, key customer details and invoice
              patterns really has been awesome value to our business!".
            </p>
            <p>Michael Wong, Co-founder of</p>
            
              <a href="#">Raw.Studio</a>
           
          <Square
            bg="#5E4DCC"
            width="216px"
            height="206px"
            left="1040px"
            top="-134px"
          >
            <Square
              bg="#FFD1DD"
              width="159px"
              height="149px"
              left="74px"
              top="137px"
            ></Square>
          </Square>
        </QuoteBlock>
      </Container>
    </StyledBody>
  );
}
