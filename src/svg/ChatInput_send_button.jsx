const ChatInput_send_button = ({color, onClick}) => {
  return (
    <svg onClick={onClick}
    width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ETC Size" clip-path="url(#clip0_720_3741)">
        <circle id="Ellipse 40" cx="18" cy="18" r="18" fill={color ? color : "#000000"} />
        <path id="Vector" d="M18 26V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M10 18L18 10L26 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_720_3741">
          <rect width="36" height="36" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  );
};

export default ChatInput_send_button;