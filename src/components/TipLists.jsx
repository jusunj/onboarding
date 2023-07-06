import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import ContentsCard from "../components/ContentsCard";

const TipLists = ({
  dataset
}) => {
  // 브라우저 유형별 헤더 스타일 적용
  const headerStyleWeb = {
    // Header 태그에서 웹 디자인을 변경해야 하는 경우 사용
    width: '1280px', height: '108px',
    justifyContent: 'center', textAlign: 'center',
    marginBottom: '60px'
  };
  const headerStyleMobile = {
    // Header 태그에서 모바일 디자인을 변경해야 하는 경우 사용
    marginBottom: '30px'
  };

  console.log(dataset);

  // 브라우저 크기
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
    <StyledTipLists>
      <Header
        size={(browserWidth > 791) ? "32" : "24"}
        text={"쇼핑 팁"} textColor={'color: #000000'}
        subText={"우리의 소중한 돈 더 잘 써보자"} subTextColor={'color: #858585'}
        style={(browserWidth > 791) ? headerStyleWeb : headerStyleMobile}
      />
      {
        dataset.map((element)=>{
          return (
            <div className="contents-card-list">
              <div className="contents-card-element">
                <ContentsCard
                  title={element.name}
                  subtitle={element.sub}
                  img={element.thumbnail}
                  date={element.date}
                  onClick={()=>{/* goto some specific url by using 'url' attribute in json files. */}}
                />
              </div>
            </div>
          );
        })
      }
    </StyledTipLists>
  );
};

const StyledTipLists = styled.div`
  margin-top: 24px;
  margin-bottom: 100px;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;


  @media (max-width: 791px) {
    margin-top: 0px;
    margin-bottom: 80px;
  }

  .contents-card-element {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }
`;

export default TipLists;