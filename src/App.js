import React from "react";
import { Route, Routes } from 'react-router-dom';
import All from "./component/page/all"
import Brands from "./component/page/brands"
import Shop from "./component/page/shop"
import Home from "./component/page/home"
import Add from "./component/page/add";
import Missing from "./component/page/missing";

function App() {
  return (
    <Routes>
      <Route path="/all" element={<All />} />
      <Route path="/brand/*" element={<All />} />
      <Route path="/category/*" element={<All />} />
      <Route path="/ntom" element={<All />} />
      <Route path="/mton" element={<All />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
