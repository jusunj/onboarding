// import logo from "./logo.svg";
import "./App.css";
import TipDetails from "./components/TipDetails";
import TipLists from "./components/TipLists";
import dataForDetails from "./assets/examplePage.json";
// import path from 'path';

import JSON01 from "./assets/tipJsons/item01.json";
import JSON02 from "./assets/tipJsons/item02.json";
import JSON03 from "./assets/tipJsons/item03.json";
import JSON04 from "./assets/tipJsons/item04.json";
import JSON05 from "./assets/tipJsons/item05.json";
import JSON06 from "./assets/tipJsons/item06.json";


function App() {
  // @/assets/tipJsons 안에 있는 모든 json 파일을 데이터셋에 저장
  const dataset = [];
  dataset.push(JSON01, JSON02, JSON03, JSON04, JSON05, JSON06);
  // console.log(dataset);
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* App4 */}

      {
        false &&
        <TipDetails data={dataForDetails} />
      }

      {
        true &&
        <TipLists dataset={dataset} />
      }
    </div>
  );
}

export default App;