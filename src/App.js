import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListShoe from "./View/ListShoe";
import CreateShoe from "./components/CreateShoe";
import EditShoe from "./components/EditShoe";
import Nav from "./Nav/Nav";
import HomeShoe from "./View/HomeShoe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<HomeShoe />}></Route>
            <Route path="/list" element={<ListShoe />}></Route>

            <Route path="/create" element={<CreateShoe />}></Route>
            <Route path="/edit/:id" element={<EditShoe />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
