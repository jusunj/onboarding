import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";
import { Header24, Header20, Header16, Body14, Body12 } from "../styles/typography";
import PathChip from './PathChip';

const rankingBackground = (options) => {
  switch (options.replaceAll(/[^0-9]/g, "")) {
    case '1':
      return '#EEE5FF';
    case '2':
      return '#ECF1FD';
    case '3':
      return '#FFEBED';
    default:
      return '#F8F8F8';
  }
};

const rankingIconsWeb = (options) => {
  switch (options.replaceAll(/[^0-9]/g, "")) {
    case '1':
      return 'rankingIcons/Whale_Web.png';
    case '2':
      return 'rankingIcons/Seal_Web.png';
    case '3':
      return 'rankingIcons/Octopus_Web.png';
    default:
      return 'rankingIcons/Fish_Web.png';
  }
};

const rankingIconsMobile = (options) => {
  switch (options.replaceAll(/[^0-9]/g, "")) {
    case '1':
      return 'rankingIcons/Whale_Mobile.png';
    case '2':
      return 'rankingIcons/Seal_Mobile.png';
    case '3':
      return 'rankingIcons/Octopus_Mobile.png';
    default:
      return 'rankingIcons/Fish_Mobile.png';
  }
};

const RankingItem = ({
  ranking,        // 등수 >>> '공동 1등' | '2등' | '3등' | ''
  nickname,       // 사용자 닉네임
  questionCount,  // 맞춘 문제 수 >>> 99998
  browserWidth
}) => {
  const [pathChipSize, setPathChipSize] = useState('medium');
  
  useEffect(
    ()=>{ (browserWidth < 791) ? setPathChipSize('tiny') : setPathChipSize('medium') }
  , [browserWidth]);

  if (questionCount > 9_999_999) { questionCount = 9_999_999; }
  const questionCountString = questionCount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <StyledRankingItem
      ranking={ranking}
      nickname={nickname}
      questionCountString={questionCountString}
      browserWidth={browserWidth}
    >
      <div className="ranking-image" style={{position: "relative"}}>
        {((ranking.replaceAll(/[^0-9]/g, "")) === '1'
        || (ranking.replaceAll(/[^0-9]/g, "")) === '2'
        || (ranking.replaceAll(/[^0-9]/g, "")) === '3') &&
          <PathChip
            className="show-chip"
            style={{position: "absolute", top: "0px", left: "0px"}} 
            bgColor={{background: "#E8F8F0"}}
            color={{color: "#15BD66"}}
            size={pathChipSize}
            text={ranking}
          />
        }
        <img
          className="ranking-image-icon"
          src={(browserWidth < 791) ? rankingIconsMobile(ranking) : rankingIconsWeb(ranking)}
          alt='rankingIcon'
        />
      </div>
      <div className='ranking-content'>
        <div className='ranking-nickname'>{nickname}</div>
        <div className='ranking-question-count'>{questionCountString} 문제 맞춤</div>
      </div>
    </StyledRankingItem>
  );
};

const StyledRankingItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .ranking-image {
    background-color: ${(props)=>rankingBackground(props.ranking)};
    border-radius: 50%;
    width: 140px;
    height: 140px;
    margin-left: 30px;
    margin-right: 30px;

    @media (max-width: 791px) {
      width: 120px;
      height: 120px;
      margin-left: 10px;
      margin-right: 10px;
    }

    .ranking-image-icon {
      position: relative;
      top: 25%;
      width: 70px;
      height: 70px;

      @media (max-width: 791px) {
        width: 60px;
        height: 60px;
      }
    }
  }

  .ranking-content {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .ranking-nickname {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 168px;
    ${Header24};
    @media (max-width: 791px) {
      width: 120px;
      ${Header16};
    }
  }

  .ranking-question-count {
    ${Body14};
    @media (max-width: 791px) {
      ${Body12};
    }
  }
`;
  
export default RankingItem;