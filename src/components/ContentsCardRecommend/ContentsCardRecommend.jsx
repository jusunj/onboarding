import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ContentsCardRecommendItem from "./ContentsCardRecommendItem";

const ContentsCardRecommend = ({
  dataset,
  mobileSize,
}) => {
  console.log(dataset);

  return (
    <StyledContentsCardRecommend mobileSize={mobileSize}>
      <ContentsCardRecommendItem
        title={dataset[0].name}
        subtitle={dataset[0].sub}
        img={dataset[0].thumbnail}
        mobileSize={mobileSize}
      />
    </StyledContentsCardRecommend>
  );
};

const StyledContentsCardRecommend = styled.div`
  display: 'grid';
  gridTemplateColumns: '384px 384px 384px';
  gridTemplateRows: '419px 419px 419px';

  @media (max-width: 791px) {
    
  }
`;

export default ContentsCardRecommend;