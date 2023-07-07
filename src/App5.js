// import logo from "./logo.svg";
import "./App.css";
import ContentsCard from "./components/ContentsCard";
import ContentsCardRecommend from "./components/ContentsCardClassification/ContentsCardRecommend";
import data from "./assets/contentsJsons/contentsExample.json"
import dataset from "./assets/contentsJsons/TipData"

function App() {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        false &&
        <ContentsCard
          title={data.name}
          subtitle={data.sub}
          date={data.date}
          img={data.thumbnail}
        />
      }
      {
        true &&
        <ContentsCardRecommend dataset={dataset} />
      }
    </div>
  );
}

export default App;