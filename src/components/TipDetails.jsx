import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { ContentsHeader20, ContentsBody16, ContentsBody15, ContentsBody13 } from "../styles/typography";
import dataset from "../assets/contentsJsons/TipData";

const TipDetails = ({
  // param으로 해당 값을 받고 있으므로 현재 필요하지 않음
  // id, // 페이지에 표현할 정보의 아이디 (현재는 JSON 파일명으로 구성되어 있음)
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [data, setData] = useState(null);

  useEffect(()=>{
    setData(dataset.filter((element)=>element.id == id)[0]);
  }, [data]);

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

  if (!data) {
    return (
      <div>Loading...</div>
    );
  }
  else {
    return (
      <StyledTipDetails>
        <Header
          size={"32"}
          text={data.name} textColor={'color: #000000'}
          subText={data.date} subTextColor={'color : #858585'}
        />
        {
          data.contents.map(element=>{
            elementCounter += 1;
  
            return (
              <div className={`${element.type} ${(elementCounter === data.contents.length) ? 'last-content' : ''}`}>
                {
                  (element.type === 'image')
                  &&
                  (
                    <div>
                      <img src={element.content} alt="IMAGE NOT FOUND"/>
                      {
                      (element.source !== "")
                      ?
                      (<span className="image-source">{element.source}</span>)
                      :
                      ''}
                    </div>
                  )
                  ||
                  element.content
                }
              </div>
            );
          })
        }
      </StyledTipDetails>
    );
  }
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

  .image-source {
    ${ContentsBody13}
    color: #858585;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    
    @media (max-width: 791px) {
      margin-top: 12px;
    }
  }

  .last-content {
    margin-bottom: 0px !important;
  }
`;

export default TipDetails;