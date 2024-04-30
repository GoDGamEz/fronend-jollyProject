import Navbar from "./component/navbar";
import React from "react";
import Page from "./component/page"

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-[100vh]">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <div className="col-start-2 col-span-4 z-0"> 
        <Page />
      </div>
    </div>
  );
}

export default App;
