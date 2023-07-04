// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import useInput from "./hooks/useInput";

function App() {
  const [message, setMessage] = useState(0);
  const {
    value,
    setValue,
    isFocused,
    setIsFocused,
    inputRef,
  } = useInput();

  const handleButton = () => {
    alert('성공!')
   
  };

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{  width: "1200px", height: "300px", background:"#D9D9"}}>
        App2

        <ChatInput
          hasInfoBox={false}
          maxLength={200}
          value={value}
          setValue={setValue}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          inputRef={inputRef}
          buttonClick={handleButton}
          placeHolder={'label'}
        />
      </div>
    </div>
  );
}

export default App;