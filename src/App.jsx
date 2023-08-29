import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ShoppingCartProvider from "./contexts/ShoppingCartContext";



const App = () => {
  return (
    
    <BrowserRouter>
      <ShoppingCartProvider> 
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
          />
        <Route
          exact
          path="/item/:id"
          element={<ItemDetailContainer />}
          />
      </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;
