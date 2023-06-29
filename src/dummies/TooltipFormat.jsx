import React from "react";
import styled from "styled-components";
import { Body12 } from "../styles/typography";
import Text_delete_14 from "../svg/Text_delete_14";
import Tooltip_arrow from "../svg/Tooltip_arrow";
const Tooltip = () => {
  return (
    <StyledTooltip>
      <div className="tooltip">Hello, Tooltip</div>
    </StyledTooltip>
  );
};

const StyledTooltip = styled.div`
  .tooltip {
    ${Body12}
  }
`;

export default Tooltip;
