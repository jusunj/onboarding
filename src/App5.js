// import logo from "./logo.svg";
import "./App.css";
import ContentsCard from "./components/ContentsCard";
import ContentsCardRecommend from "./components/ContentsCardRecommend/ContentsCardRecommend";
import data from "./assets/contentsJsons/contentsExample.json"
import dataset from "./assets/contentsJsons/TipData"

function App() {

  return (
    <div
      style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: "100%",
        padding: "0 14px"
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
      DUMMY TEXT
      {
        true &&
        <ContentsCardRecommend dataset={dataset} mobileSize={'large'}/>
      }
      {
        false &&
        <ContentsCardRecommend dataset={dataset} mobileSize={'small'}/>
      }
    </div>
  );
}

export default App;