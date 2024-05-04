import Navbar from "../navbar";
import React from "react";
import homePic from "./homePic.png";
import { ArrowRight, Store } from "lucide-react";

function Home() {
  return (
    <div className="bg-[#f9f9f9] min-h-[100vh]">
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <div className="flex-grow relative">
        <img src={homePic} alt="Home" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 bg-black text-white p-8 space-y-6 rounded-[10px] shadow-2xl">
          <h1 className="flex text-4xl">
            <div>
              <Store size={36} className="mr-4" />
            </div>
            Welcome To JollyShop
          </h1>
          <p className="text-xl ml-1">Subtitle or Description Here</p>
          <div>
            <a href="/all">
              <button
                type="button"
                className="relative flex shadow-md rounded-[10px] bg-gradient-to-tr from-[#1e92d5] to-[#3d45cb] p-[10px] text-gray-100 hover:text-white focus:outline-none transition ease-in-out delay-100 hover:scale-110"
              >
                <span className="text-lg">Shop Now!</span>
                <div>
                  <ArrowRight size={24} className="ml-1 w-[23px] lg:w-[24px]" />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 p-16">
        <div className="p-8 bg-white rounded-[10px] shadow-md">
          <p className="font-bold">Name:</p>
          <p>Number:</p>
        </div>
        <div className="p-8 bg-white rounded-[10px] shadow-md">
          <p className="font-bold">Name:</p>
          <p>Number:</p>
        </div>
        <div className="p-8 bg-white rounded-[10px] shadow-md">
          <p className="font-bold">Name:</p>
          <p>Number:</p>
        </div>
        <div className="p-8 bg-white rounded-[10px] shadow-md">
          <p className="font-bold">Name:</p>
          <p>Number:</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
