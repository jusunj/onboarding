// import logo from "./logo.svg";
import "./App.css";

import PathChip from "./components/PathChip";
import Tooltip from "./components/Tooltip";
import Text_delete_14 from "./svg/Text_delete_14";

import RankingFrame from "./components/RankingFrame";
import RankingItem from "./components/RankingItem";


function App() {
  return (
    <>
      <div style={{ padding: "300px", width: "1200px" }}>

        <RankingFrame />

        <br /><br />

        {/* <RankingFrame
          data={'1'
              //  {ranking: 1, isTied: true, nickname: '알아서뭐하시게요', questionCount: 99999},
              //  {ranking: 1, isTied: true, nickname: '라벨라벨라벨라벨링', questionCount: 99999},
              //  {ranking: 2, isTied: false, nickname: '텀블러', questionCount: 99998},
              //  {ranking: 3, isTied: false, nickname: '마우스는로지텍', questionCount: 99996},
              //  {ranking: 4, isTied: false, nickname: '오늘점심짜장면', questionCount: 99994},
            }
        /> */}

        <Tooltip
          direction={"south"}
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
          initialExposure={true}
        />
        
        <PathChip
          style={{posiiton: "absolute"}}
          bgColor={{ background: "pink" }}
          color={{ color: "red" }}
          // size={browserWidth > 791 ? "medium" : "tiny"}
          text="라벨"
        />
      </div>
    </>
  );
}

export default App;
