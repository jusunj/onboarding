// import logo from "./logo.svg";
import "./App.css";
import TipDetails from "./components/TipDetails";
import TipLists from "./components/TipLists";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  
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