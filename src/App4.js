// import logo from "./logo.svg";
import "./App.css";
import TipsDetails from "./components/TipDetails";
import dataForDetails from "./assets/examplePage.json";

function App() {

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
        true &&
        <TipsDetails data={dataForDetails} />
      }
    </div>
  );
}

export default App;