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
          placeHolder={'메시지를 입력해 주세요.'}
        />
      </div>
    </div>
  );
}

export default App;