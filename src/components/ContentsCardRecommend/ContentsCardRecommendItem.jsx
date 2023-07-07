import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  Header22, Header18, Header14,
  ContentsBody15, ContentsBody14, ContentsBody13
} from "../../styles/typography";

const ContentsCardRecommendItem = ({
  title,
  subtitle,
  img,
  mobileSize,
}) => {
  return (
    <StyledContentsCardRecommendItem mobileSize={mobileSize}>
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
        </div>
      </div>
    </StyledContentsCardRecommendItem>
  );
};

const StyledContentsCardRecommendItem = styled.div`
  cursor: pointer;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  white-space: normal;
  
  @media (max-width: 791px) {
    width: ${
      (props)=>((props.mobileSize === 'large') ? '260px' : '')
    };
    height: ${
      (props)=>((props.mobileSize === 'large') ? '292px' : '')
    };
  }

  // 이미지
  .contents-card-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: auto;
    overflow: hidden;

    
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
    text-align: left !important;
    padding-top: 20px;
    height: 159px;

    @media (max-width: 791px) {
      padding-top: 10px;
      height: ${(props)=>(props.mobileSize === 'large') ? 'auto' : '127px'};
    }

    .contents-card-text-title {
      ${Header22}
      color: #303030;
      margin-bottom: 10px;
      word-break: break-all;

      @media (max-width: 791px) {
        ${(props)=>(props.mobileSize === 'large') ? Header18 : Header14}
        margin-bottom: 8px;
      }
    }

    .contents-card-text-subtitle {
      ${ContentsBody15}
      color: #555555;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 최대 줄 수 설정 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: 791px) {
        ${(props)=>(props.mobileSize === 'large') ? ContentsBody14 : ContentsBody13}
      }
    }
  }
`;

export default ContentsCardRecommendItem;