import React from "react";
import styled from "styled-components";
import { Right_14 } from "../../Atoms/Icon/Arrow";
import { singleColors } from "../../StyleGuide/singleColors";
import { Body14, Header14 } from "../../StyleGuide/typography";
import { Purple700 } from "../../StyleGuide/colors";

const CTA_Banner = ({ onClick, leftIcon, text, subText, CTA_text }) => {
  return (
    <StyledCTA_Banner onClick={onClick}>
      <LeftSection subText={subText}>
        {leftIcon && <div className="leftIcon">{leftIcon}</div>}
        <div className="bodyText">
          <div className="text">{text}</div>
          {subText && <div className="subText">{subText}</div>}
        </div>
      </LeftSection>

      <RightSection leftIcon={leftIcon} subText={subText}>
        <div className="CTA_text">{CTA_text}</div>
        <div className="rightArrow">
          <Right_14 color={singleColors.purple700} />
        </div>
      </RightSection>
    </StyledCTA_Banner>
  );
};

const StyledCTA_Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  cursor: pointer;

  @media (max-width: 791px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ subText }) => (subText ? "" : "center")};

  .leftIcon {
    margin-right: 12px;

    @media (max-width: 791px) {
      margin-right: 16px;
    }
  }

  .bodyText {
    .text {
      ${Header14}
    }

    .subText {
      margin-top: 4px;
      ${Body14}
    }
  }
`;

const RightSection = styled.div`
  display: flex;

  @media (max-width: 791px) {
    margin-left: 40px;
    margin-left: ${({ leftIcon }) => (leftIcon ? "40px" : "0px")};
    margin-top: ${({ subText }) => (subText ? "10px" : "8px")};
  }

  .CTA_text {
    ${Header14}
    ${Purple700}
  }

  .rightArrow {
    margin-top: 3px;
    margin-left: 4px;
  }
`;

export default CTA_Banner;