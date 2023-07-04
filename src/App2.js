// import logo from "./logo.svg";
import "./App.css";
import ChatInput from "./components/ChatInput";
import useInput from "./hooks/useInput";

function App() {
  const {
    value,
    setValue,
    isFocused,
    setIsFocused,
    inputRef,
  } = useInput();

  const handleButton = () => {
    alert('버튼을 눌렀을 때 전송되는 코드가 여기에 들어가야 합니다.');
  };

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{  width: "1200px", height: "93.1vh", background:"#D9D9"}}>
        App2

        <br/><br/>
        <div class="messages">
          <ul>
            <li class="sent">
              <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" style={{width: '100px', height: '100px'}}/>
              <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
            </li>
            <br/>
            <li class="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" style={{width: '100px', height: '100px'}}/>
              <p>When you're backed against the wall, break the god damn thing down.</p>
            </li>
            <br/>
            <li class="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" style={{width: '100px', height: '100px'}}/>
              <p>Excuses don't win championships.</p>
            </li>
            <br/>
            <li class="sent">
              <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" style={{width: '100px', height: '100px'}} />
              <p>Oh yeah, did Michael Jordan tell you that?</p>
            </li>
            <br/>
            <li class="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" style={{width: '100px', height: '100px'}}/>
              <p>No, I told him that.</p>
            </li>
          </ul>
        </div>


        <ChatInput
          hasInfoBox={false}
          maxLength={200}
          value={value}
          setValue={setValue}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          inputRef={inputRef}
          buttonClick={handleButton}
          placeHolder={'메시지를 입력해 주세요.'}
        />
      </div>
    </div>
  );
}

export default App;