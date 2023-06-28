import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";
import PathChip from "./components/PathChip";

function App() {
  return (
    <>
      <div style={{ padding: "600px" }}>
        <Tooltip
          direction={"east"}
          arrowLocation={1}
          icon={null}
          text={
            <div>
              이런 식의 사용이 가능합니다
              <br/>
              ---
              <br/>
              개행을 사용합니다.
            </div>
          }
          target={<button id="target">TOOLTIP<br/>ME</button>} // target 은 id='target' 을 속성으로 가져야 합니다.
          gap={0}
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
