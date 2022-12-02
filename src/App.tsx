import React from "react";
import "./Style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import LogIn from "./Components/LogIn";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
