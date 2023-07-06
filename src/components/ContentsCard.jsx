import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  Header30, Header24,
  ContentsBody16, ContentsBody15, ContentsBody14, ContentsBody13
} from "../styles/typography";

const ContentsCard = ({
  title,
  subtitle,
  img,
  // mobileImgHeight,
  date,
}) => {

  return (
    <StyledContentsCard
      // mobileImgHeight={mobileImgHeight}
    >
      <div className="contents-card-image-wrapper">
        <img className="contents-card-image" src={img} alt="IMAGE NOT FOUND"/>
      </div>
      <div className="contents-card-text-wrapper">
        <div className="contents-card-text">

          <div className="contents-card-text-title">
            {title}
          </div>
          <div className="contents-card-text-subtitle">
            {subtitle}
          </div>
          <div className="contents-card-text-date">
            {date}
          </div>
        </div>
      </div>
    </StyledContentsCard>
  );
};

const StyledContentsCard = styled.div`
  display: flex;
  width: 792px;
  
  @media (max-width: 791px) {
    display: block;
    width: 100%;
  }

  // 이미지
  .contents-card-image-wrapper {
    background-color: #F8F8F8;
    height: 200px;
    width: 200px;
    max-width: 200px;
    border-radius: 20px;
    
    @media (max-width: 791px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      max-width: 100%;
      height: 240px;
      max-height: 240px;
      // height: ${(props)=>props.mobileImgHeight}px;
      // max-height: ${(props)=>props.mobileImgHeight}px;
      overflow: hidden;
    }
    
    .contents-card-image {
      width: inherit;
      height: inherit;
      object-fit: cover;
      border-radius: 20px;
      
      @media (max-width: 791px) {
        object-fit: cover;
      }
    }
  }
  
  // 텍스트
  .contents-card-text-wrapper {
    // margin: auto;
    padding-left: 48px;
    text-align: left !important;

    @media (max-width: 791px) {
      padding-left: 0px;
      padding-top: 20px;
    }

    .contents-card-text-title {
      ${Header30}
      color: #303030;
      margin-bottom: 10px;
      word-break: break-all;

      @media (max-width: 791px) {
        ${Header24}
      }
    }

    .contents-card-text-subtitle {
      ${ContentsBody16}
      color: #555555;
      margin-bottom: 8px;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* 최대 줄 수 설정 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: 791px) {
        ${ContentsBody15}
      }
    }

    .contents-card-text-date {
      ${ContentsBody14}
      color: #999999;

      @media (max-width: 791px) {
        ${ContentsBody13}
      }
    }
  }
`;

export default ContentsCard;