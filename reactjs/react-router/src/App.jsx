import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Error from "./pages/Error";
import User from "./pages/User";
import Phone from "./Phone";
import Laptop from "./Laptop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h3>React router Example here below</h3>
        <nav>
          <Link to="/">Home</Link>|
          <Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>|
          <Link to="/user/10">User</Link>||
          <Link to="/product">Product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product" element={<Product />}>
            <Route path="laptop" element={<Laptop />} />
            <Route path="phone" element={<Phone />} />
          </Route>

          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
