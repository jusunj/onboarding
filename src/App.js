import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";
import PathChip from "./components/PathChip";
import Text_delete_14 from "./svg/Text_delete_14";
function App() {
  return (
    <>
      <div style={{ padding: "600px" }}>

        <Tooltip
          direction={"north"}
          arrowLocation={2}
          text={
            <div>
              이런 식의 사용이 가능합니다
              <br/>
              ---
              <br/>
              개행도 가능합니다.
            </div>
          }
          target={<button id="target">TOOL<br/>4213 </button>} // target 은 id='target' 을 속성으로 가져야 합니다.
          gap={10}
          move={0}
          icon={<Text_delete_14 />}
          initialExposure={false}
        />

        {/* <PathChip
          bgColor={{ background: "pink" }}
          color={{ color: "red" }}
          size="tiny"
          text="라벨"
        /> */}
      </div>
    </>
  );
}

export default App;
