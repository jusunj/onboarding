import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header16 } from "../styles/typography";

const FullWidthButton = ({
  isFocused,      // Boolean 타입
  isDisabled,     // Boolean 타입
  buttonText,     // 버튼에 표시할 내용
  buttonClicked,  // 버튼이 클릭됐을 때 실행할 함수
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(()=>{
    if (isFocused) setIsVisible(true);
    else setIsVisible(false);
  });

  return (
    <StyledFullWidthButton>
      {
        isVisible &&
        <button onClick={buttonClicked} disabled={isDisabled}>
          {buttonText}
        </button>
      }
    </StyledFullWidthButton>
  );
};

const StyledFullWidthButton = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 50px;
    padding: 13px 14px;
    border: none;
    
    background-color: #000000;
    color: #FFFFFF;

    ${Header16}
  }

  button:hover {
    background-color: #555555;
    color: #FFFFFF;
  }

  button:active {
    background-color: #303030;
    color: #FFFFFF;
  }

  button:disabled {
    background-color: #EBEBEB;
    color: #C2C2C2;
    cursor: not-allowed;
  }
`;

export default FullWidthButton;