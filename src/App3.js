// import logo from "./logo.svg";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./App.css";
import FullWidthButton from "./components/FullWidthButton";
import Radio from "./components/Radio";
import useInput from "./hooks/useInput";

function App() {
  const { isFocused, setIsFocused, } = useInput();
  const buttonClicked = () => {
    alert('버튼이 클릭되었습니다!');
  };
  const buttonText = '라벨';

  
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{  width: "1200px", height: "100vh", background:"#9D9D"}}>
        App3
        <br/><br/>

        {
          true &&
          <div>
            <input type="text"
              onFocus={()=>setIsFocused(true)}
              // [TEST] onBlur={()=>setIsFocused(false)}
            />
            <FullWidthButton
              isFocused={isFocused}
              isDisabled={false}
              buttonText={buttonText}
              buttonClicked={buttonClicked}
            />
          </div>
        }

        {
          false &&
          <div>
            <Radio />
            <Radio backgroundColor={'#9D9D'} />
            <Radio backgroundColor={'#9D9D'} />

            <Radio backgroundColor={'#9D9D'} disabled={true} disabledStatus={true} />
            <Radio backgroundColor={'#9D9D'} disabled={true} disabledStatus={false} />    
          </div>
        }
      </div>
    </div>
  );
}

export default App;