import React from "react";
import styled from "styled-components";
import { Body12 } from "../styles/typography";
import Text_delete_14 from "../svg/Text_delete_14";
import Tooltip_arrow from "../svg/Tooltip_arrow";

const tooltip_attribute = {
  directions : 's',  // options - e | w | s | n
  vertical: '2',  // options - 1(high or left) | 2(middle or center) | 3(low or right)
  icon : false, // options - true | false,
  text : 'text',
  hoveredText : 'hovered text',
};

const Tooltip = () => {
  return (
  <StyledTooltip>
    <div className="tooltip">
      Tooltip Message
      <div className="tooltip tooltip-message">
        Tooltip text
      </div>
    </div>
  </StyledTooltip>
  );
};

// const StyledTooltip = styled.div`
//   .tooltip {
//   ${Body12}
//   }
// `;

const StyledTooltip = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltip-message {
    visibility: hidden;
    width: 179px;
    height: 42px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 12px;
    
    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltip-message {
    visibility: visible;
  }

  .icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

export default Tooltip;


// reference lists
// 1. https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip

// <!DOCTYPE html>
// <html>
// <style>
// .tooltip {
//   position: relative;
//   display: inline-block;
//   border-bottom: 1px dotted black;
// }

// .tooltip .tooltiptext {
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   border-radius: 6px;
//   padding: 5px 0;

//   /* Position the tooltip */
//   position: absolute;
//   z-index: 1;
// }

// .tooltip:hover .tooltiptext {
//   visibility: visible;
// }
// </style>
// <body style="text-align:center;">

// <h2>Basic Tooltip</h2>

// <p>Move the mouse over the text below:</p>

// <div class="tooltip">Hover over me
//   <span class="tooltiptext">Tooltip text</span>
// </div>

// <p>Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to position the tooltip in a desirable way.</p>

// </body>
// </html>