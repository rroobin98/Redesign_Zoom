import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Banner from "./Banner";
import Article from "./Article";

function App() {
  return (
    <div className="App font-sans">
      <Nav />
      <Hero />
      <Banner />
      <Article />
    </div>
  );
}

export default App;