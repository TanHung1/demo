import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListShoe from "./View/ListShoe";
import CreateShoe from "./components/CreateShoe";
import EditShoe from "./components/EditShoe";
import Nav from "./Nav/Nav";
import ShoeDetail from "./View/ShoeDetail";
import HomeShoe from "./View/HomeShoe";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" exact element={<HomeShoe />}></Route>
            <Route path="/list" element={<ListShoe />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/create" element={<CreateShoe />}></Route>
            <Route path="/edit/:id" element={<EditShoe />} />
            <Route path="/shoes/:id" element={<ShoeDetail />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
