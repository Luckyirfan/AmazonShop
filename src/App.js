import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./Components/A-TitleBord/Title";
import Search from "./Components/D-ProductsFiles/Search";
import Carousels from "./Components/B-MyCaroselData/Carousels"
import Routers from "./Components/F-Routing/Routers";
import Footers from "./Components/E-Footer/Footers";
// import Navigation from "./Components/Navigation/Navigation";
// import {MyCarouselData} from "./Components/Navigation/MyCaroselData/MyCarouselData"

function App() {
  return (
    <div className="App">
      
      
      {/* <MyCarouselData/> */}
      {/* <Navigation/> */}
      <Title/>
      
      <Carousels/>
      <Routers/>
      <Search/>
      <Footers/>
    
    </div>
  );
}

export default App;
