import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import { ContentsHeader20, ContentsBody16, ContentsBody15 } from "../styles/typography";

const TipDetails = ({
  data, // 페이지에 표현할 내용에 대한 정보
}) => {
  const { name, date, contents } = data;
  let elementCounter = 0; // 마지막 콘텐츠에는 margin-bottom이 들어가지 않음

  useEffect(()=>{
    const forbiddenScrap = (event) => {
      event.preventDefault();
    }

    document.addEventListener('copy', forbiddenScrap);
    document.addEventListener('cut', forbiddenScrap);
    document.addEventListener('paste', forbiddenScrap);

    return () => {
      document.removeEventListener('copy', forbiddenScrap);
      document.removeEventListener('cut', forbiddenScrap);
      document.removeEventListener('paste', forbiddenScrap);
    };
  }, []);
  
  return (
    <StyledTipDetails>
      <Header
        size={"32"}
        text={name} textColor={'color: #000000'}
        subText={date} subTextColor={'color : #858585'}
      />
      {
        contents.map(element=>{
          elementCounter += 1;

          return (
            <div className={`${element.type} ${(elementCounter === contents.length) ? 'last-content' : ''}`}>
              {
                (element.type === 'image')
                &&
                (<img src={element.content} alt="IMAGE NOT FOUND"/>)
                ||
                element.content
              }
            </div>
          );
        })
      }
    </StyledTipDetails>
  );
};

const StyledTipDetails = styled.div`
  width: 588px;
  margin-top: 24px;
  margin-bottom: 40px;
  cursor: default;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  @media (max-width: 791px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 30px;
  }

  .title {
    ${ContentsHeader20}
    margin-bottom: 20px;

    @media (max-width: 791px) {
      ${ContentsHeader20}
      margin-bottom: 10px;
    }
  }

  .plain {
    ${ContentsBody16}
    margin-bottom: 40px;
    white-space: pre-wrap;

    @media (max-width: 791px) {
      ${ContentsBody15}
      margin-bottom: 30px;
    }
  }

  .image {
    margin-bottom: 40px;
    max-width: 588px;
    height: auto;

    img {
      border-radius: 16px;
      width: 100%;
      max-width: 588px;
      height: auto;
    }
    
    @media (max-width: 791px) {
      margin-bottom: 30px;
    }
  }

  .last-content {
    margin-bottom: 0px !important;
  }
`;

export default TipDetails;