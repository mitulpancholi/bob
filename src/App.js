import React, { useEffect } from "react";
import gsap from "gsap";
import Banner from "./components/banner";
import Cases from "./components/cases";
import Header from "./components/header";
import IntroOverlay from "./components/introOverlay";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevent flashing of h2 span on refresh
    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });

    //timeline
    const tl = gsap.timeline();

    tl.from(".line span", {
      duration: 1.8,
      opacity: 0,
      y: 100,
      ease: "Power4.out",
      skewY: 7,
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", {
        duration: 1.6,
        height: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4,
        },
      })
      .to(".overlay-bottom", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", {
        duration: 0,
        css: {
          display: "none",
        },
      })
      .from(".case-image img", {
        duration: 1.6,
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      });
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
