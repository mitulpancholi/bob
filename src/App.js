import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Route } from "react-router-dom";
import "./styles/App.scss";

//components
import Header from "./components/header";
import Navigation from "./components/navigation";

//pages
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";
import Approch from "./pages/approch";
import About from "./pages/about";
import Services from "./pages/services";

const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/product-detail",
    name: "Product Detail",
    Component: ProductDetail,
  },
  {
    path: "/approch",
    name: "Approch",
    Component: Approch,
  },
  {
    path: "/about",
    name: "About Us",
    Component: About,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
  },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // prevent flashing of h2 span on refresh
  gsap.to("body", {
    duration: 0,
    css: {
      visibility: "visible",
    },
  });

  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimension.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

 

    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 750)

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <Header dimension={dimension} />
      {console.log(dimension)}
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
