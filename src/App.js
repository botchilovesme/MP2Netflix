import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
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
      </div>
    </BrowserRouter>
  );
}

export default App;
