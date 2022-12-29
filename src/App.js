import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
