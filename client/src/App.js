import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/users" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
