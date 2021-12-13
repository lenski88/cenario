import styled from "styled-components";

export const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 40px 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #69698f;

  h1 {
  }

  p {
    font-size: 32px;
    line-height: 48px;
    color: #35288b;
    padding: 0 95px;
    margin: 10px
  }
  a {
    font-size: 16px;
    line-height: 27px;
    color: #5e4dcc;

    &:hover {
      opacity: 0.9;
    }

    &:active,
    :visited {
      color: #5e4dcc;
    }
  }
  @media (max-width:${({theme})=> theme.mobile}) {
      & p {
          padding: 10px
      }
  }
`;

export const QuoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  margin-top: 120px;
  box-shadow: 2px 2px 20px #62636b;
  position:relative;

  @media (max-width: 1410px) {
      & :first-child, & :last-child {
          display: none;
      }
  }
`;

export const QuoteImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const Square = styled.div`
    position:absolute;
    left:${({left}) => left};
    top: ${({top})=> top};
    width:${({width})=> width};
    height: ${({height}) => height};
    background-color: ${({bg})=> bg};
`


