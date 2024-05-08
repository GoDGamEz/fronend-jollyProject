import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./component/page/home"
import Add from "./component/page/add";
import Missing from "./component/page/missing";
import Admin from "./component/admin/admin";

function App() {
  return (
    <Routes>
      <Route path="/all" element={<Admin  />} />
      <Route path="/brand/*" element={<Admin  />} />
      <Route path="/category/*" element={<Admin  />} />
      <Route path="/ntom" element={<Admin />} />
      <Route path="/mton" element={<Admin  />} />
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
