import React, { useEffect, useState} from "react";
import styled, {css} from "styled-components";
import { Body12 } from "../styles/typography";
// import Text_delete_14 from "../svg/Text_delete_14";
// import Tooltip_arrow from "../svg/Tooltip_arrow";

const Tooltip = ({
  direction,         // 방향 >>> east | west | north | south
  arrowLocation,     // 화살표 위치 >>>  0 (none) | 1 (왼쪽 또는 위쪽) | 2 (가운데) | 3 (오른쪽 또는 아래쪽)
  icon,              // 아이콘
  text,              // 내용 ex_ <>hello <br/> world</> <!-- for statement 반영도 고려-->
  target,            // tooltip을 연동할 태그
  gap,               // tooltip과 타겟 간 거리
  move,              // inline으로 위치를 변경하기 위한 코드
  initialExposure    // 최초에 보이는 상태일지 결정
}) => {
  const [widthOfTooltip, setWidthOfTooltip] = useState(0);
  const [heightOfTooltip, setHeightOfTooltip] = useState(0);
  const [heightOfTarget, setHeightOfTarget] = useState(0);
  const [widthOfTarget, setWidthOfTarget] = useState(0);
  const [isVisible, setIsVisible] = useState(initialExposure);

  useEffect(()=>{
    let tooltipWidth = 0, tooltipHeight = 0, targetWidth = 0, targetHeight = 0;
    tooltipWidth = document.getElementById('tooltip-core')?.offsetWidth ;
    tooltipHeight = document.getElementById('tooltip-core')?.offsetHeight;
    targetWidth = document.getElementById('target')?.offsetWidth;
    targetHeight = document.getElementById('target')?.offsetHeight;
    
    if (!icon) {
      document.addEventListener('click', (event)=>{
        setIsVisible(false);
      });
    }
    
    if (direction == 'north' || direction == 'south') {
      setWidthOfTooltip(tooltipWidth * (-0.5));
    }
    else {
      setWidthOfTooltip('none');
    }
    
    if (direction == 'east' || direction == 'west') {
      setHeightOfTooltip(tooltipHeight * 0.5);
    }
    else {
      setHeightOfTooltip('none');
    }

    
    setHeightOfTarget(targetHeight);
    setWidthOfTarget(targetWidth);
  }, [direction, target, text, arrowLocation]);

  return (
    <StyledTooltip
      widthOfTooltip={widthOfTooltip}
      heightOfTooltip={heightOfTooltip}
      widthOfTarget={widthOfTarget}
      heightOfTarget={heightOfTarget}
      direction={direction}
      arrowLocation={arrowLocation}
      icon={icon}
      text={text}
      target={target}
      gap={gap}
      move={move}
      initialExposure={initialExposure}
      onMouseEnter={()=>{if(!initialExposure) setIsVisible(true)}}
      onMouseLeave={()=>{if(!icon) setIsVisible(false)}}
    >
      
      {target}
      <div
        className='tooltip-core tooltip-properties'
        id="tooltip-core"
        style={{visibility: (isVisible ? 'visible' : 'hidden')}}
      >
        <div className='text'>{text}</div>
        {icon && <div className='icon' onClick={()=>{setIsVisible(!isVisible)}} style={{display: "flex", height:"auto", alignItems: "center"}}>{icon}</div>}
      </div>
    </StyledTooltip>
  );
};

let directions = {
  east: {
    top: '0px', bottom: 'none', left: '130%', right: 'none', marginLeft: 'none',
  },
  west: {
    top: '0px', bottom: 'none', left: 'none', right: '130%', marginLeft: 'none',
  },
  north: {
    top: 'none', bottom: '140%', left: '50%', right: 'none', marginLeft: '-100px',
  },
  south: {
    top: '140%', bottom: 'none', left: '50%', right: 'none', marginLeft: '-100px',
  },
};

const arrowDirections = {
  east: {
    top: 'none', bottom: 'none', left: 'none', right: '100%', marginTop: '-5px', marginLeft: 'none', borderColor: 'transparent black transparent transparent'
  },
  west: {
    top: 'none', bottom: 'none', left: '100%', right: 'none', marginTop: '-5px', marginLeft: 'none', borderColor: 'transparent transparent transparent black'
  },
  south: { 
    top: 'none', bottom: '100%', left: 'none', right: 'none', marginTop: 'none', marginLeft: '-5px', borderColor: 'transparent transparent black transparent'
  },
  north: {
    top: '100%', bottom: 'none', left: 'none', right: 'none', marginTop: 'none', marginLeft: '-5px', borderColor: 'black transparent transparent transparent'
  },
}

const selectTop = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.top;
    case 'west':
      return directions.west.top;
    case 'north':
      return directions.north.top;
    case 'south':
      return directions.south.top;
  }
});
    
const selectBottom = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.bottom;
    case 'west':
      return directions.west.bottom;
    case 'north':
      return directions.north.bottom;
    case 'south':
      return directions.south.bottom;  
  }
});
    
const selectLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.left;
    case 'west':
      return directions.west.left;
    case 'north':
      return directions.north.left;
    case 'south':
      return directions.south.left;
  }
});

const selectRight = ((direction)=>{
  switch(direction) {
    case 'east':
      return directions.east.right;
    case 'west':
      return directions.west.right;
    case 'north':
      return directions.north.right;
    case 'south':
      return directions.south.right;
  }
});
                    
const selectArrowTop = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.top;
    case 'west':
      return arrowDirections.west.top;
    case 'north':
      return arrowDirections.north.top;
    case 'south':
      return arrowDirections.south.top;
  }
});
      
const selectArrowBottom = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.bottom;
    case 'west':
      return arrowDirections.west.bottom;
    case 'north':
      return arrowDirections.north.bottom;
    case 'south':
      return arrowDirections.south.bottom;
  }
});
        
const selectArrowLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.left;
    case 'west':
      return arrowDirections.west.left;
    case 'north':
      return arrowDirections.north.left;
    case 'south':
      return arrowDirections.south.left;
  }
});
              
const selectArrowRight = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.right;
    case 'west':
      return arrowDirections.west.right;
    case 'north':
      return arrowDirections.north.right;
    case 'south':
      return arrowDirections.south.right;
    }
});

const selectArrowMarginTop = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.marginTop;
    case 'west':
      return arrowDirections.west.marginTop;
    case 'north':
      return arrowDirections.north.marginTop;
    case 'south':
      return arrowDirections.south.marginTop;
  }
});

const selectArrowMarginLeft = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.marginLeft;
    case 'west':
      return arrowDirections.west.marginLeft;
    case 'north':
      return arrowDirections.north.marginLeft;
    case 'south':
      return arrowDirections.south.marginLeft;
  }
});
                
const selectArrowBorderColor = ((direction)=>{
  switch(direction) {
    case 'east':
      return arrowDirections.east.borderColor;
    case 'west':
      return arrowDirections.west.borderColor;
    case 'north':
      return arrowDirections.north.borderColor;
    case 'south':
      return arrowDirections.south.borderColor;
  }
});

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;
  white-space : nowrap;

  ${Body12}

  .tooltip-properties {
    display: flex;
    gap : 10px;
    // align-item: center;
    visibility: hidden;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    
    top: ${(props)=>(props.direction == 'south') ? `${(props.gap) + props.heightOfTarget - 1}px` : selectTop(props.direction)};
    bottom: ${(props)=>(props.direction == 'north') ? `${(props.gap) + props.heightOfTarget - 1}px` : selectBottom(props.direction)};
    left: ${(props)=>(props.direction == 'east') ? `${(props.gap) + props.widthOfTarget - 1}px` : selectLeft(props.direction)};
    right: ${(props)=>(props.direction == 'west') ? `${(props.gap) + props.widthOfTarget - 1}px` : selectRight(props.direction)};
    margin-left: ${(props)=>props.widthOfTooltip}px;
    margin-top: ${(props)=>(props.arrowLocation ? props.heightOfTooltip : -(props.heightOfTooltip*0.5))}px;
  }

  ${(props)=>
    props.arrowLocation &&
    css`
    .tooltip-properties::after {
      content: " ";
      position: absolute;
      border-width: 8px 7px;
      border-style: solid;
      
      top: ${(props)=>selectArrowTop(props.direction)};
      bottom: ${(props)=>selectArrowBottom(props.direction)};
      left: ${(props)=>selectArrowLeft(props.direction)};
      right: ${(props)=>selectArrowRight(props.direction)};
      
      margin-top: ${(props)=>selectArrowMarginTop(props.direction)};
      margin-left: ${(props)=>selectArrowMarginLeft(props.direction)};
      border-color: ${(props)=>selectArrowBorderColor(props.direction)};
    }
    `
  }

  ${(props)=>
    ((props.arrowLocation === 0) && ((props.direction === 'north') || (props.direction === 'south'))) &&
    css`
    .tooltip-properties {
      margin-left: ${(props.widthOfTooltip) * 0.5 + (props.widthOfTarget * 0.5) - 7}px;
    }
    `
  }

  ${(props)=>
    ((props.arrowLocation === 0) && ((props.direction === 'east') || (props.direction === 'west'))) &&
    css`
    .tooltip-properties {
      margin-top: -50%;
    }
    `
  }

  ${(props)=>
    ((props.arrowLocation === 1) && ((props.direction === 'north') || (props.direction === 'south'))) &&
      css`
      .tooltip-properties {
        left: 0px;
        margin-left: ${(props.widthOfTarget * 0.5) - 14 + (props.move)}px;
      }
      .tooltip-properties::after {
        left: 14px;
      }
    }`
  }

  ${(props)=>
    ((props.arrowLocation === 1) && ((props.direction === 'east') || (props.direction === 'west'))) &&
    css`
      .tooltip-properties {
        margin-top: ${(props.heightOfTarget * 0.5) - 14  + (props.move)}px;
      }
      .tooltip-properties::after {
        top: 14px;
      }
    }`
  }

  ${(props)=>
      ((props.arrowLocation === 2) && ((props.direction === 'east') || (props.direction === 'west'))) &&
      css`
      .tooltip-properties {
        top: 0px;
        margin-top: ${-(props.heightOfTooltip) + (0.5 * props.heightOfTarget) - 4  + (props.move)}px;
      }
      .tooltip-properties::after {
        top: 50%;
      }
    }`
  }
  
  ${(props)=>
    ((props.arrowLocation === 3) && ((props.direction === 'north') || (props.direction === 'south'))) &&
    css`
    .tooltip-properties {
      margin-left: ${(props.widthOfTooltip) - (props.widthOfTarget)  + (props.move)}px;
    }
    .tooltip-properties::after {
      right: 14px;
    }`
  }

  ${(props)=>
    ((props.arrowLocation === 3) && ((props.direction === 'east') || (props.direction === 'west'))) &&
    css`
    .tooltip-properties {
      margin-top: ${(props.heightOfTarget) -(props.heightOfTooltip * 2) + 14  + (props.move)}px;
    }
    .tooltip-properties::after {
      bottom: 10px;
    }`
  }

  // @media(min-width: 791px) {
  //   &:hover .tooltip-core {
  //     visibility: visible;
  //   }
  // }

  .icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

export default Tooltip;
