import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Body14, Body12 } from "../styles/typography";

const ChatInput = ({message, hasInfoBox}) => {
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
    <StyledChatInput browserWidth={browserWidth}>
      <div className="chat-input-wrapper">
        <div className="chat-input-core">
          <textarea className="chat-input-text" id="chat-input-text" rows="6"></textarea>
        </div>
        <div className="chat-input-button">
          <img src="inputIcons/InputButton.svg" style={{color: 'red', width: '36px', height: '36px'}}/>
        </div>
      </div>
    </StyledChatInput>
  );
};

const StyledChatInput = styled.div`
  .chat-input-wrapper {
    display: flex;
    align-items: center;
    background-color: white;

    position: absolute;
    bottom: 0px;
    width: inherit;

    padding: 7px 14px;
    border-top: 1px solid #EBEBEB;
  }

  .chat-input-core {
    width: ${(props)=>props.browserWidth - 100}px;
    position: relative;
  }
  
  .chat-input-text {
    width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 10px 12px;
    ${ Body14 }
  }

  .chat-input-button {
    width: 36px;
    height: 36px;
    margin-left: 36px;
    position: relative;
  }
`;

export default ChatInput;