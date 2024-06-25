import React from "react";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setLogOut }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const optionsHandler = () => {
    return token ? (
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
        <div className="flex items-center space-x-2 sm:space-x-4 text-white cursor-pointer">
          <CardMembershipIcon />
          <h1 className="text-white font-sans text-2xl sm:text-3xl">Plan</h1>
        </div>
        <h1
          className="cursor-pointer hover:text-white transition-all duration-300"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </h1>
        <h1
          className="cursor-pointer hover:text-white transition-all duration-300"
          onClick={() => setLogOut(true)}
        >
          Logout
        </h1>
        <h1
          className="cursor-pointer hover:text-white transition-all duration-300"
          onClick={() => navigate("/plans")}
        >
          Plans
        </h1>
      </div>
    ) : (
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
        <div className="flex items-center space-x-2 sm:space-x-4 text-white cursor-pointer">
          <CardMembershipIcon />
          <h1 className="text-white font-sans text-2xl sm:text-3xl">Plan</h1>
        </div>
        <h1
          className="cursor-pointer hover:text-white transition-all duration-300"
          onClick={() => navigate("/register")}
        >
          Register
        </h1>
        <h1
          className="cursor-pointer hover:text-white transition-all duration-300"
          onClick={() => navigate("/login")}
        >
          Login
        </h1>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col sm:flex-row justify-around pl-4 pr-4 items-center h-auto sm:h-28 text-slate-400 text-lg sm:text-xl">
      {optionsHandler()}
    </div>
  );
};

export default Navbar;
