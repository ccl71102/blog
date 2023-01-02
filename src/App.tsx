import React from "react";
import Home from "./js/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainContainer } from "./js/shared/main-container/styles";
import Navbar from "./js/shared/navbar";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;
