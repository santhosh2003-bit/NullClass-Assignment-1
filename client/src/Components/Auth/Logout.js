import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLogOut }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-3 rounded w-[400px] shadow-2xl ">
      <h1 className="text-center text-xl font-bold mb-3">Log Out</h1>
      <p className="text-center text-xl">Are you sure Want to LogOut</p>
      <div className="flex w-full justify-between p-4">
        <button
          className="font-bold bg-green-600 pt-1 pb-1 pl-2 pr-2 rounded text-white"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          LogOut
        </button>
        <button
          className="font-bold bg-rose-700 pt-1 pb-1 pl-2 pr-2 rounded text-white"
          onClick={() => setLogOut(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
