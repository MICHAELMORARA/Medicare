import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import { Services } from "./components/Services";
import { Otherpages } from "./components/Otherpages";
import { Blog } from "./components/Blog";
import { Departments } from "./components/Departments";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/otherpages" element={<Otherpages />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
