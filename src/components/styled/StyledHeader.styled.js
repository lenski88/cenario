import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  color: #5e4dcc;
  padding: 40px 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  h1 {
    font-size: 79px;
    line-height: 83px;
    letter-spacing: 2.496px;
  }
  h4 {
    font-size: 19px;
    line-height: 26px;
    letter-spacing: 1px;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      font-size: 36px;
      line-height: 36px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;

    &:hover {
      opacity: 0.9;
    }

    &:active,
    :visited {
      color: #5e4dcc;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  ul > li:not(:last-child) {
    margin-right: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const Logo = styled.img``;

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
  background-color: #ff4d7b;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;

  & > p {
    margin-right: 20px;
  }

  & button {
    height: 40px;
    color: #f8f8f8;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 10px 0;
      width: 50%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    font-size: 14px;
  }
`;

export const HeaderForm = styled.div`
  input {
    margin-right: 20px;
    background: #ffffff;
    border: 2px solid #ebebec;
    border-radius: 3px;
    height: 58px;
    color: #5e4dcc;
    font-size: 24px;

    &::placeholder {
      color: #5e4dcc;
      opacity: 0.7;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    input {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
`;

export const HeaderImageBlock = styled.div`
  position: relative;
  margin: 40px 0;
  height: 470px;

  @media (max-width: 1139px) {
    & :first-child,
    & :last-child {
      display: none;
    }
    & img {
      position: static;
      margin-left: 1.2%;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  max-width: 100%;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
`;
