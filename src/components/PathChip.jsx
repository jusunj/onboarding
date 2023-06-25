import React from "react";
import styled from "styled-components";
import { Header10, Header12 } from "../../StyleGuide/typography";

//예시 컴포넌트

const PathChip = ({ size, color, bgColor, leftIcon, text }) => {
    return (
        <StyledPathChip color={color} bgColor={bgColor} size={size} leftIcon={leftIcon}>
            {leftIcon && <div className="icon">{leftIcon}</div>}
            <div className="text">{text}</div>
        </StyledPathChip>
    );
};

const StyledPathChip = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: ${({ size }) => (size === "tiny" ? "4px" : size === "medium" ? "6px" : "")};
    padding: ${({ size, leftIcon }) => (size === "tiny" ? "2px 6px 3px 6px" : size === "medium" && leftIcon ? "5px 10px 5px 8px" : "5px 10px 5px 10px")};

    ${({ size }) => (size === "tiny" ? Header10 : size === "medium" ? Header12 : "")}
    ${({ color }) => color}
    ${({ bgColor }) => bgColor}

    

    .icon {
        width: 14px;
        height: 14px;
        margin-right: 4px;
    }
`;

export default PathChip;
