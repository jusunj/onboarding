import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <>
      <div style={{margin: '150px;', padding: '150px;'}}>
        <Tooltip
          width={'300px'} direction={'east'}
          allowArrow={true} allowLocation={2}
          icon={null} text={'hello world!'}
          target={<p>Target!</p>}
        />
      </div>
    </>
  );
}

export default App;
