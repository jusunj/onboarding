import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import ContentsCard from "./ContentsCard";
import dataset from "../assets/contentsJsons/TipData";
import { Link } from "react-router-dom";

const TipLists = ({
  // 필요한 인자가 여기에 들어갑니다.
  // 현재 json 파일들로 구성된 dataset을 직접 임포트하므로 사용하지 않습니다.
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
                <Link
                  className="contents-card-item-link"
                  to={`/tipDetails?id=${element.id}`}
                >
                  <ContentsCard
                    style={{width: '100%'}}
                    title={element.name}
                    subtitle={element.sub}
                    img={element.thumbnail}
                    date={element.date}
                  />
                </Link>
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

    @media (max-width: 791px) {
      width: 100%;
    }
  }

  .contents-card-item-link {
    text-decoration: none;

    @media (max-width: 791px) {
      width: 100%;
    }
  }
`;

export default TipLists;