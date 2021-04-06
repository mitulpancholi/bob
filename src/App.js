import React, { useEffect } from "react";
import Banner from "./components/banner";
import Cases from "./components/cases";
import Header from "./components/header";
import IntroOverlay from "./components/introOverlay";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
