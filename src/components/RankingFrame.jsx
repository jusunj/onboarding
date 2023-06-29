import React, { useState } from 'react';
import styled from "styled-components";
import { Header24, Header20, Body14, Body12,  } from "../styles/typography";
// import { Header16 } from "../styles/typography";
import RankingItem from './RankingItem';

const RankingFrame = ({data}) => {
  return (
    <StyledRankingFrame>
      <div className='ranking-header center'>
        <div className='ranking-title'>
          최저가 퀴즈 명예의 전당
        </div>
        <div className='ranking-subtitle'>
          가입 회원님들의 퀴즈 랭킹!
        </div>
      </div>
      <div className='ranking-content'>
        <RankingItem ranking={'first'} isTied={true} nickname={'메롱메롱열매'} questionCount={99998}/>
        <RankingItem ranking={'first'} isTied={true} nickname={'고무고무열매'} questionCount={99998} />
        <RankingItem ranking={'second'} isTied={false} nickname={'불주먹에이스'} questionCount={99997} />
        <RankingItem ranking={'third'} isTied={false} nickname={'명탐정코난'} questionCount={9995 }/>
        <RankingItem ranking={'fourth'} isTied={false} nickname={'삼도류'} questionCount={9991} />
      </div>
    </StyledRankingFrame>
  );
};

const StyledRankingFrame = styled.div`
  text-align: center;
  width: 100%;

  .center {
    margin: auto;
    width: 50%;
    padding: 10px;
  }

  .ranking-header {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .ranking-title {
    padding-bottom: 10px;
    ${Header20}
  }

  .ranking-subtitle {
    color: grey;
    ${Body14}
  }
`;

export default RankingFrame;