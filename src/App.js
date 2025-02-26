import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Soilders from "./soilders";
import "./styles/App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soilders" element={<Soilders />} />
      </Routes>
    </Router>
  );
}

export default App;

