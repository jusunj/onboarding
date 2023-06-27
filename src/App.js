import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <>
      <div style={{padding: '400px'}}>
        <Tooltip
          // width={'150px'}
          direction={'south'}
          allowArrow={true} allowLocation={2}
          icon={null} text={<div>'~~~~~~~~~~~~~~~~~~'<br/>'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br/>~~~~~~~~~~</div>}
          target={'Target'}
        />
      </div>
    </>
  );
}

export default App;
