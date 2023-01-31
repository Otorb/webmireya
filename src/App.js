import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import SobreMi from "./Components/AboutMe/SobreMi";
import Clases from "./Components/Users/Clases";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<SobreMi />} />
        <Route exact path="/clases" element={<Clases />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
