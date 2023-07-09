import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./page";
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="navbar-container">
      <nav className="navbar">
        <header className="w-full flex justify-between items-center bg-white md:px-8 2xl:px-32 px-4 py-4 border-b shadow-sm border-b-[#e6ebf4]">
          <Link to="/">
            {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
            <span className="text-[2.2rem] font-semibold text-gray-800 LogoName">
              AutoAI
            </span>
          </Link>
          <Link
            to="/createpost"
            className="text-white bg-[#10131f] hover:bg-[#3f4a6f] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Generate
          </Link>
        </header>
      </nav>
    </div>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
