import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="netflix-show" element={<NetFlixShow />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;