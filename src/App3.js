// import logo from "./logo.svg";
import "./App.css";
import Radio from './components//Radio';

function App() {
  
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{  width: "1200px", height: "100vh", background:"#9D9D"}}>
        App3
        <form>
        <Radio backgroundColor={'yellow'}/>
        <Radio backgroundColor={'yellow'}/>
        <Radio backgroundColor={'yellow'}/>
        <Radio backgroundColor={'yellow'}/>
          </form>

        <Radio backgroundColor={'yellow'} disabled={true} disabledStatus={true}/>
        <Radio backgroundColor={'yellow'} disabled={true} disabledStatus={false}/>    
      </div>
    </div>
  );
}

export default App;