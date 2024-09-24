import "./styles/App.css";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import Footer from "./components/footer/Footer";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Info from "./screens/Info/info";
import Product from "./screens/Product/Product";
import { useState } from "react";

function App() {
  const [scrollTo, setScrollTo] = useState(null);

  return (
    <>
      <Header setScrollTo={setScrollTo} />
      <HorizontalScroll scrollTo={scrollTo} setScrollTo={setScrollTo}>
        <Home setScrollTo={setScrollTo} />
        <Info />
        <Product />
      </HorizontalScroll>
      <Footer />
    </>
  );
}

export default App;
