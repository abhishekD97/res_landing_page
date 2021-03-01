import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Carousel/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
