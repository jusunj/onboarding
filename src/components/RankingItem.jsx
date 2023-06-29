import React, { useState } from 'react';
import styled, {css} from "styled-components";
import { Header24, Header20, Body14, Body12,  } from "../styles/typography";
// import { Header16 } from "../styles/typography";

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

const RankingItem = ({
  ranking,        // 등수 >>> first | second | third | others
  isTied,         // 공동 여부 >>> true | false
  nickname,       // 사용자 닉네임
  questionCount,  // 맞춘 문제 수 >>> 99998
}) => {
  const [isMobile, setIsMobile] = useState(false);

  if (document.documentElement.clientWidth < 791) {
    setIsMobile(true);
  }

  return (
    <StyledRankingItem
      ranking={ranking}
      isTied={isTied}
      nickname={nickname}
      questionCount={questionCount}
      isMobile={isMobile}
    >
      <div className="ranking-image center">
        <img
          className="ranking-image-icon"
          src={(isMobile) ? rankingIconsMobile(ranking) : rankingIconsWeb(ranking)}
          alt='rankingIcon'
          
        />
      </div>
      <div className='ranking-content'>
        <div className='ranking-nickname'>{nickname}</div>
        <div className='ranking-question-count'>{questionCount} 문제 맞춤</div>
      </div>
    </StyledRankingItem>
  );
};

const StyledRankingItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  
  ${(props)=>{
    (!(props.isMobile)) &&
    css`
    align-items: flex-start;
    gap: 4px;
    `
  }}
  
  ${(props)=>{
    (props.isMobile) &&
    css`
    align-items: center;
    gap: 10px;
    `
  }}
  
  .ranking-image {
    background-color: ${(props)=>rankingBackground(props.ranking)};
    border-radius: 50%;
    width: ${(props)=>(props.isMobile) ? '120px': '140px'};
    height: ${(props)=>(props.isMobile) ? '120px': '140px'};
    margin-left: ${(props)=>(props.isMobile) ? '10px': '30px'};
    margin-right: ${(props)=>(props.isMobile) ? '10px': '30px'};

    .ranking-image-icon {
      width: ${(props)=>(props.isMobile) ? '60px' : '70px'};
      height: ${(props)=>(props.isMobile) ? '60px' : '70px'};
      position: relative;
      top: 25%;
    }
  }

  .ranking-content {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .ranking-nickname {
    ${Header20}
  }

  .ranking-question-count {
    ${Body14}
  }
`;
  
export default RankingItem;