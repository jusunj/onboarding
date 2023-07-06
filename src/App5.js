// import logo from "./logo.svg";
import "./App.css";
import ContentsCardList from "./components/ContentsCardClassification/ContentsCardList";
import ContentsCardRecommend from "./components/ContentsCardClassification/ContentsCardRecommend";
import data from "./assets/examplePage.json"

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
        <ContentsCardList
          title={data.name}
          subtitle={data.sub}
          date={data.date}
          img={data.thumbnail}
        />
      }
      {
        true &&
        <div>
          <ContentsCardRecommend
            title={data.name}
            subtitle={data.sub}
            img={data.thumbnail}
            size={'large'}
          />
          <ContentsCardRecommend
            title={data.name}
            subtitle={data.sub}
            img={data.thumbnail}
            size={'large'}
          />
          <ContentsCardRecommend
            title={data.name}
            subtitle={data.sub}
            img={data.thumbnail}
            size={'large'}
            />
        </div>
      }
      {
        false &&
        <div>
          <ContentsCardRecommend
            title={data.name}
            subtitle={data.sub}
            img={data.thumbnail}
            size={'small'}
          />
          <ContentsCardRecommend
            title={data.name}
            subtitle={data.sub}
            img={data.thumbnail}
            size={'small'}
          />
          <ContentsCardRecommend
            title={data.name}
            subtitle={data.sub}
            img={data.thumbnail}
            size={'small'}
            />
        </div>
      }
    </div>
  );
}

export default App;