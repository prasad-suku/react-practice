import React from "react";
import "./index.css";
import Form from "./form/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Showdata from "./form/Showdata";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/Register" element={<Register></Register>} />
            <Route path="/Form" element={<Form></Form>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
