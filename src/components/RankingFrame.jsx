import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Header24, Header20, Body14 } from "../styles/typography";
import RankingItem from './RankingItem';

const RankingFrame = ({data}) => {
  
  /*  isMobile을 useWidth로 대체>>>
  const [isMobile, setIsMobile] = useState(false);
  
  const handleResize = () => {
    if (document.documentElement.clientWidth < 791) setIsMobile(true);
    else setIsMobile(false);
  };
  
  window.addEventListener('resize', handleResize);
  
  useEffect(()=>{
    if (document.documentElement.clientWidth < 791) setIsMobile(true);
    else setIsMobile(false);
  }, [isMobile]);
  */
  const [browserWidth, setBrowserWidth] = useState(document.documentElement.clientWidth);

  const resizeTimer = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimer.current !== null) return;
      resizeTimer.current = setTimeout(() => {
        resizeTimer.current = null;
        setBrowserWidth(window.innerWidth);
      }, 200);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [browserWidth]);

  return (
    <StyledRankingFrame>
      <div className='ranking-header'>
        <div className='ranking-title'>
          최저가 퀴즈 명예의 전당
        </div>
        <div className='ranking-subtitle'>
          가입 회원님들의 퀴즈 랭킹!
        </div>
      </div>
      <div className='ranking-content' style={browserWidth > 791 ? { } : {width: `${browserWidth}px`, overflowX: 'scroll'}}>
        <RankingItem ranking={data[0].ranking} nickname={data[0].nickname} questionCount={data[0].questionCount} browserWidth={browserWidth} />
        <RankingItem ranking={data[1].ranking} nickname={data[1].nickname} questionCount={data[1].questionCount} browserWidth={browserWidth} />
        <RankingItem ranking={data[2].ranking} nickname={data[2].nickname} questionCount={data[2].questionCount} browserWidth={browserWidth} />
        <RankingItem ranking={data[3].ranking} nickname={data[3].nickname} questionCount={data[3].questionCount } browserWidth={browserWidth} />
        <RankingItem ranking={data[4].ranking} nickname={data[4].nickname} questionCount={data[4].questionCount} browserWidth={browserWidth} />
      </div>
    </StyledRankingFrame>
  );
};

const StyledRankingFrame = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  position: relative;
  
  // align-items: flex-start;
  gap: 4px;
  
  @media (max-width: 791px) {
    align-items: center;
    gap: 10px;
    overflow: auto;
  }
  
  .ranking-title {
    padding-bottom: 10px; 
    ${Header24}

    @media (max-width: 791px) {
      padding-bottom: 6px;
      ${Header20}
      overflow: auto;
    }
  }
  
  .ranking-header {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (max-width: 791px) {
      float: left;
      overflow: auto;
    }
  }

  .ranking-subtitle {
    color: grey;
    ${Body14}

    @media (max-width: 791px) {
      float: left;
      overflow: auto;
    }
  }
  
  .ranking-content {
    margin-top: 20px;
    white-space: nowrap;

    @media (max-width: 791px) {
      float: left;
      overflow: auto;
      left: 0px;
    }
  }

  .ranking-content::-webkit-scrollbar {
    display: none;
  }
`;

export default RankingFrame;