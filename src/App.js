import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Soilders from "./soilders";
import "./styles/App.css"
import Stories from "./stories.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soilders" element={<Soilders />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;

