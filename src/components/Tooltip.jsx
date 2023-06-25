import React from "react";
import styled from "styled-components";
import { Body12 } from "../styles/typography";
import Text_delete_14 from "../svg/Text_delete_14";
import Tooltip_arrow from "../svg/Tooltip_arrow";
const Tooltip = ({ rightIcon }) => {
    return (
        <StyledTooltip>
            <div className="tooltip">Hello, Tooltip</div>
            {rightIcon && <div>닫기 버튼</div>}
        </StyledTooltip>
    );
};

const StyledTooltip = styled.div`
    .tooltip {
        ${Body12}
    }
`;

export default Tooltip;
