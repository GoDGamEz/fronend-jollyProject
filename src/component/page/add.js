import Navbar from "../navbar";
import React from "react";
import Form from "../form";

function Add() {
  return (
    <div className="bg-[#f9f9f9] min-h-[100vh]">
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <div className="flex justify-center py-12"> 
        <Form />
      </div>
    </div>
  );
}

export default Add;
