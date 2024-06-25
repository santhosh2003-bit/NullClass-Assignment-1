import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Logout from "./Components/Auth/Logout";

const Home = () => {
  const [logOut, setLogOut] = useState(false);
  return (
    <div className="background_image h-[100vh] overflow-hidden relative">
      <Navbar setLogOut={setLogOut} />
      <div className="absolute top-[40%] left-[5%] sm:top-[40%] sm:left-[10%] md:top-[50%] md:left-[15%] lg:left-[20%]">
        <div>
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Welcome to Subscription Plan Application
          </h1>
        </div>
      </div>
      {logOut && (
        <div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          onClick={() => setLogOut(false)}
        >
          <Logout setLogOut={setLogOut} />
        </div>
      )}
    </div>
  );
};

export default Home;
