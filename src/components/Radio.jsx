import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Radio = ({
  backgroundColor,  // radio 를 사용하는 태그의 색상 (기본값: null)
  disabled,         // 선택을 차단할지 여부 (기본값: false)
  disabledStatus,   // 선택을 차단한 경우, status를 on(=true)로 표기할지 off(=false)로 표기할지 여부
}) => {

  return (
    <StyledRadio backgroundColor={backgroundColor}>
      <input type="radio" disabled={disabled} checked={disabledStatus} />
    </StyledRadio>
  );
};

const StyledRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: yellow;

  [type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    border: 1.8px solid #D6D6D6;
    transition: border 0.2s ease-in-out;
  }
  
  [type="radio"]:hover {
    border: 1.8px solid #000000;
    cursor: pointer;
  }
  
  [type="radio"]:checked {
    width: 16.2px;
    height: 16.2px;
    outline: 1.8px solid #000000;
    border: 3.1px solid ${(props) => (props.backgroundColor) ? props.backgroundColor : '#ffffff'};
    background-color: #000000;
  }

  ${
    (props)=>(!props.disabled) &&
    css`
    [type="radio"]:checked:hover {
      width: 16.2px;
      height: 16.2px;
      outline: 1.8px solid #555555;
      border: 3.1px solid ${(props) => (props.backgroundColor) ? props.backgroundColor : '#ffffff'};
      background-color: #555555;
    }
    `
  }

  [type="radio"]:disabled {
    width: 18px;
    height: 18px;
    background-image: url('radioIcons/disabledBackground.svg');
    border: none;
    cursor: not-allowed;
  }
  
  [type="radio"]:disabled:checked {
    width: 16.2px;
    height: 16.2px;
    background-color: #C2C2C2;
    background-image: none;
    outline: 1.8px solid #C2C2C2;
    border: 3.1px solid ${(props) => (props.backgroundColor) ? props.backgroundColor : '#ffffff'};

    box-shadow: none;
    // opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default Radio;