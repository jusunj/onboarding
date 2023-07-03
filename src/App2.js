// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";

function App() {
  const [message, setMessage] = useState(0);

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{  width: "1200px", height: "300px", background:"#D9D9"}}>
        App2

        <ChatInput
          hasInfoBox={false}
          maxLength={100}
        />
      </div>
    </div>
  );
}

export default App;