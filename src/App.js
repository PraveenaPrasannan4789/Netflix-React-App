
import React  from "react";
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' urlType='originals'/>
      <RowPost title='Action' isSmall urlType='action'/>
      <RowPost title='Comedy Movies' isSmall urlType='comedy'/>
    </div>
  );
}

export default App;
