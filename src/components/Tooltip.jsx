import React from "react";
import styled, {css} from "styled-components";
// import { Body12 } from "../styles/typography";
// import Text_delete_14 from "../svg/Text_delete_14";
// import Tooltip_arrow from "../svg/Tooltip_arrow";

const Tooltip = ({
  width,             // 너비
  direction,         // 방향 >>> east | west | south | north
  allowArrow,        // 화살표 기능 활성화 여부 >>> true | false
  arrowLocation,     // 화살표 위치 >>>  0 (none) | 1 (왼쪽 또는 위쪽) | 2 (가운데) | 3 (오른쪽 또는 아래쪽)
  icon,              // 아이콘
  text,              // 내용 ex_ <>hello <br/> world</> <!-- for statement 반영도 고려-->
  target,            // tooltip을 연동할 태그
}) => {
  return (
    <StyledTooltip
      width={width}
      direction={direction}
      allowArrow={allowArrow}
      arrowLocation={arrowLocation}
      icon={icon}
      text={text}
      target={target}
    >
      {target}
      <div className='tooltip-core tooltip-properties'>
        <div className='text'>{text}</div>
        {/* {icon && <div className='icon'>{icon}</div>} */}
      </div>
    </StyledTooltip>
  );
};

const directions = {
  east: {
    top: '-5px', bottom: 'none', left: '105%', right: 'none', marginLeft: 'none',
  },
  west: {
    top: '5px', bottom: 'none', left: 'none', right: '105%', marginLeft: 'none',
  },
  south: {
    top: 'none', bottom: '100%', left: '50%', right: 'none', marginLeft: '-75px',
  },
  north: {
    top: '100%', bottom: 'none', left: '50%', right: 'none', marginLeft: '-75px',
  },
};

const arrowDirections = {
  east: {
    top: '50%', bottom: 'none', left: 'none', right: '100%', marginTop: '-5px', marginLeft: 'none', borderColor: 'transparent black transparent transparent'
  },
  west: {
    top: '50%', bottom: 'none', left: '100%', right: 'none', marginTop: '-5px', marginLeft: 'none', borderColor: 'transparent transparent transparent black'
  },
  south: { 
    top: 'none', bottom: '100%', left: '50%', right: 'none', marginTop: 'none', marginLeft: '-5px', borderColor: 'transparent transparent black transparent'
  },
  north: {
    top: '100%', bottom: 'none', left: '50%', right: 'none', marginTop: 'none', marginLeft: '-5px', borderColor: 'black transparent transparent transparent'
  },
}

const selectTop = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.top;
    case 'west':
      return directions.west.top;
    case 'south':
      return directions.south.top;
    case 'north':
      return directions.north.top;
  }
});

const selectBottom = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.bottom;
    case 'west':
      return directions.west.bottom;
    case 'south':
      return directions.south.bottom;
    case 'north':
      return directions.north.bottom;

  }
});

const selectLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.left;
    case 'west':
      return directions.west.left;
    case 'south':
      return directions.south.left;
    case 'north':
      return directions.north.left;
  }
});

const selectRight = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.right;
    case 'west':
      return directions.west.right;
    case 'south':
      return directions.south.right;
    case 'north':
      return directions.north.right;
  }
});

const selectMarginLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.marginLeft;
    case 'west':
      return directions.west.marginLeft;
    case 'south':
      return directions.south.marginLeft;
    case 'north':
      return directions.north.marginLeft;
  }
});

const selectArrowTop = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.top;
    case 'west':
      return arrowDirections.west.top;
    case 'south':
      return arrowDirections.south.top;
    case 'north':
      return arrowDirections.north.top;
  }
});

const selectArrowBottom = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.bottom;
    case 'west':
      return arrowDirections.west.bottom;
    case 'south':
      return arrowDirections.south.bottom;
    case 'north':
      return arrowDirections.north.bottom;
  }
});

const selectArrowLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.left;
    case 'west':
      return arrowDirections.west.left;
    case 'south':
      return arrowDirections.south.left;
    case 'north':
      return arrowDirections.north.left;
  }
});

const selectArrowRight = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.right;
    case 'west':
      return arrowDirections.west.right;
    case 'south':
      return arrowDirections.south.right;
    case 'north':
      return arrowDirections.north.right;
  }
});

const selectArrowMarginTop = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.marginTop;
    case 'west':
      return arrowDirections.west.marginTop;
    case 'south':
      return arrowDirections.south.marginTop;
    case 'north':
      return arrowDirections.north.marginTop;
  }
});

const selectArrowMarginLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.marginLeft;
    case 'west':
      return arrowDirections.west.marginLeft;
    case 'south':
      return arrowDirections.south.marginLeft;
    case 'north':
      return arrowDirections.north.marginLeft;
  }
});

const selectArrowBorderColor = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.borderColor;
    case 'west':
      return arrowDirections.west.borderColor;
    case 'south':
      return arrowDirections.south.borderColor;
    case 'north':
      return arrowDirections.north.borderColor;
  }
});


const StyledTooltip = styled.div`
  position: relative;
	display: inline-block;
	border-bottom: 1px dashed grey;

  .tooltip-properties {
    visibility: hidden;
    width: ${(props)=>props.width};
    background-color: black;
    color: #fff
    text-align: center;
    border-radius: 10px; /* 설정값 존재 */
    padding: 10px; /* 설정값 존재 */
    position: absolute;
    z-index: 1;

    top: ${(props)=>selectTop(props.direction)};
    bottom: ${(props)=>selectBottom(props.direction)};
    left: ${(props)=>selectLeft(props.direction)};
    right: ${(props)=>selectRight(props.direction)};
    margin-left: ${(props)=>selectMarginLeft(props.direction)};
  }

  .tooltip-container .tooltip-arrow-down::after {
    content: " ";
    position: absolute;
    border-width: 5px;
    border-style: solid;

    ${(props)=>
      props.allowArrow &&
      css `
      top: ${(props)=>selectArrowTop(props.direction)};
      bottom: ${(props)=>selectArrowBottom(props.direction)};
      left: ${(props)=>selectArrowLeft(props.direction)};
      right: ${(props)=>selectArrowRight(props.direction)};
      margin-top: ${(props)=>selectArrowMarginTop(props.direction)};
      margin-left: ${(props)=>selectArrowMarginLeft(props.direction)};
      border-color: ${(props)=>selectArrowBorderColor(props.direction)};
      `
    }
  }

  &:hover .tooltip-core {
		visibility: visible;
	}

  .icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

export default Tooltip;
