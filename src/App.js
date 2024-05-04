import React from "react";
import { Route, Routes } from 'react-router-dom';
import All from "./component/page/all"
import Electric from "./component/page/electric"
import Acoustic from "./component/page/acoustic"
import Accessories from "./component/page/accessories"
import Home from "./component/page/home"

function App() {
  return (
    <Routes>
      <Route path="/all" element={<All />} />
      <Route path="/electric" element={<Electric />} />
      <Route path="/acoustic" element={<Acoustic />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/" element={<Home />} />
      {/*<Route path="*" element={<Missing />} />*/}
    </Routes>
  );
}

export default App;
