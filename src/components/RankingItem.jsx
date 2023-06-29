import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";
import { Header24, Header20, Header16, Body14, Body12 } from "../styles/typography";
import PathChip from './PathChip';

const rankingBackground = (options) => {
  switch (options) {
    case 'first':
      return '#EEE5FF';
    case 'second':
      return '#ECF1FD';
    case 'third':
      return '#FFEBED';
    default:
      return '#F8F8F8';
  }
};

const rankingIconsWeb = (options) => {
  switch (options) {
    case 'first':
      return 'rankingIcons/Whale_Web.png';
    case 'second':
      return 'rankingIcons/Seal_Web.png';
    case 'third':
      return 'rankingIcons/Octopus_Web.png';
    default:
      return 'rankingIcons/Fish_Web.png';
  }
};

const rankingIconsMobile = (options) => {
  switch (options) {
    case 'first':
      return 'rankingIcons/Whale_Mobile.png';
    case 'second':
      return 'rankingIcons/Seal_Mobile.png';
    case 'third':
      return 'rankingIcons/Octopus_Mobile.png';
    default:
      return 'rankingIcons/Fish_Mobile.png';
  }
};

const rankingText = (options, isTied) => {
  switch (options) {
    case `first`:
      return `${(isTied)?'공동':''} 1등`;
    case `second`:
      return `${(isTied)?'공동':''} 2등`;
    case `third`:
      return `${(isTied)?'공동':''} 3등`;
    default:
      return ;
  }
};

const RankingItem = ({
  ranking,        // 등수 >>> first | second | third | others
  isTied,         // 공동 여부 >>> true | false
  nickname,       // 사용자 닉네임
  questionCount,  // 맞춘 문제 수 >>> 99998
  isMobile,       // 모바일 여부
}) => {
  const [pathChipSize, setPathChipSize] = useState('medium');
  
  useEffect(()=>{
    if (isMobile) {
      setPathChipSize('tiny');
    }
    else {
      setPathChipSize('medium');
    }
  });

  if (questionCount > 9_999_999) { questionCount = 9_999_999; }
  const questionCountString = questionCount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <StyledRankingItem
      ranking={ranking}
      isTied={isTied}
      nickname={nickname}
      questionCountString={questionCountString}
      isMobile={isMobile}
    >
      <div className="ranking-image" style={{position: "relative"}}>
        {((ranking) === 'first'
        || (ranking) === 'second'
        || (ranking) === 'third') &&
          <PathChip
            className="show-chip"
            style={{position: "absolute", top: "0px", left: "0px"}} 
            bgColor={{background: "#E8F8F0"}}
            color={{color: "#15BD66"}}
            size={pathChipSize}
            text={rankingText(ranking, isTied)}
          />
        }
        <img
          className="ranking-image-icon"
          src={(isMobile) ? rankingIconsMobile(ranking) : rankingIconsWeb(ranking)}
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
    ${Header24};
    @media (max-width: 791px) {
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