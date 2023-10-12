import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      {/* <div id="turn">
        <img src="/img/rotatePhone.png" alt="" />
        <h1>Please rotate your devices!</h1>
      </div> */}
      <div className="App" id="container">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
