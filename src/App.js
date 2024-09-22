import "./styles/App.css";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
