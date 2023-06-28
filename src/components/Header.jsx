import React from "react";
import styled from "styled-components";
import {
  Body14,
  Body15,
  Header20,
  Header24,
  Header32,
} from "../styles/typography";

const Header = ({
  onClick,
  style,
  text,
  subText,
  size,
  rightText,
  rightButton,
  subTextColor,
  textColor,
}) => {
  return (
    <StyledHeader
      onClick={onClick}
      style={style}
      textColor={textColor}
      subTextColor={subTextColor}
      size={size}
    >
      <div>
        <div className="text">{text}</div>
        {subText && <div className="subText">{subText}</div>}
      </div>
      {rightText && <div className="rightText">{rightText}</div>}
      {rightButton && <div className="rightButton">{rightButton}</div>}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;

  .text {
    ${({ size }) =>
      size === "20"
        ? Header20
        : size === "24"
        ? Header24
        : size === "32"
        ? Header32
        : ""}

    ${({ textColor }) => textColor}
  }

  .subText {
    margin-top: ${({ size }) =>
      size === "20"
        ? "6px"
        : size === "24"
        ? "10px"
        : size === "32"
        ? "12px"
        : ""};

    ${({ size }) =>
      size === "20"
        ? Body14
        : size === "24"
        ? Body14
        : size === "32"
        ? Body15
        : ""}

    ${({ subTextColor }) => subTextColor}
  }

  .rightText {
    ${Body14}
  }
`;

export default Header;
