// import logo from "./logo.svg";
import "./App.css";
import TipDetails from "./components/TipDetails";
import TipLists from "./components/TipLists";
// import dataForDetails from "./assets/examplePage.json";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  // @/assets/tipJsons 안에 있는 모든 json 파일을 데이터셋에 저장
  // const dataset = [JSON01, JSON02, JSON03, JSON04, JSON05, JSON06];
  
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    // >
    //   {/* App4 */}

    //   {
    //     false &&
    //     <TipDetails data={dataForDetails} />
    //   }

    //   {
    //     true &&
    //     <TipLists dataset={dataset} />
    //   }
    // </div>
    
    <Router>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Route path="/tipDetails"><TipDetails /></Route>
        <Route path="/tipLists"><TipLists /></Route>
      </div>
    </Router>
  );
}

export default App;