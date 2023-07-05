// import logo from "./logo.svg";
import "./App.css";
import FullWidthButton from "./components/FullWidthButton";
import Radio from "./components/Radio";
import ContentsCard from "./components/ContentsCard";
import useInput from "./hooks/useInput";

function App() {
  const { isFocused, setIsFocused, } = useInput();
  const onClick = () => {
    alert('버튼이 클릭되었습니다!');
  };
  const buttonText = '라벨';

  
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
      <div style={{ height: "100vh", background: "#9D9D" }}>
        App3
        <br/><br/>

        {
          true &&
          <div style={{ background: "#FA33FA" }}>
            <ContentsCard
              title={'라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨'}
              subtitle={'라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨'
              +'라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨'
              +'라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨라벨'}
              img={'logo512.png'}
              mobileImgHeight={270}
              date={'2019.03.01'}
            />
          </div>
        }

        {
          false &&
          <div>
            <input type="text"
              onFocus={()=>setIsFocused(true)}
              // [TEST] onBlur={()=>setIsFocused(false)}
            />
            <FullWidthButton
              isFocused={isFocused}
              isDisabled={false}
              buttonText={buttonText}
              onClick={onClick}
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