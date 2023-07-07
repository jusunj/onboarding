import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import ContentsCardRecommendItem from "./ContentsCardRecommendItem";

const ContentsCardRecommend = ({
  dataset,
  mobileSize,
  rowMargin,
  rowMarginMobile
}) => {
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
    <StyledContentsCardRecommend mobileSize={mobileSize} browserWidth={browserWidth} rowMargin={rowMargin} rowMarginMobile={rowMarginMobile}>
      <div className="contents-card-recommend-row">
        {
          dataset.map((element)=>{
            if (element)

            return (
              <ContentsCardRecommendItem
                title={element.name}
                subtitle={element.sub}
                img={element.thumbnail}
                mobileSize={mobileSize}
              />
            );
          })
        }
      </div>
    </StyledContentsCardRecommend>
  );
};

const StyledContentsCardRecommend = styled.div`
  .contents-card-recommend-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 24px;
    row-gap: ${(props)=>(props.rowMargin) ? 0 : props.rowMargin}px;
    
    @media (max-width: 791px) {
      ${(props)=>
        (props.mobileSize === 'large') ?
        css`
        display: flex;
        white-space: nowrap;
        column-gap: 20px;
        float: left;
        overflow: auto;
        `
        :
        ``
      }

      ${(props)=>
        (props.mobileSize === 'small') ?
        css`
        column-gap: 20px;
        row-gap: ${(props)=>(props.rowMarginMobile) ? 0 : props.rowMarginMobile}px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 294px 294px;
        `
        :
        ``
      }
    }
  }

  .contents-card-recommend-row::-webkit-scrollbar {
    // display: none;
  }
`;

export default ContentsCardRecommend;