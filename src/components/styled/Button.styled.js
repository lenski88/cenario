import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => bg || "#5E4DCC"};
  color: ${({ color }) => color || "#F8F8F8"};
  border: 2px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  border-radius: 3px;
  width: ${({ width }) => width || "175px"};
  height: 60px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  text-align: center;

  &:hover {
      opacity:.9;
      transform: scale(.95)
  }

  @media (max-width: ${({ theme }) => theme.mobile }) {
      margin: 10px 0;
      width: 175px
    }
`;
