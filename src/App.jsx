import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Gallery from './components/Gallery/Gallery'
import Furniture from "./components/Furniture/Furniture";
import Prices from "./components/Prices/Prices";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar isDesktop={viewportWidth >= 768} />
      <Main />
      <About />
      <Gallery />
      <Furniture />
      <Prices />
      <Footer />
    </>
  );
}
