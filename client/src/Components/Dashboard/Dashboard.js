import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dashboard from "../../images/dashboard.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));
  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  useEffect(() => {
    if (!token || !userData) {
      navigate("/login");
    }
  }, [token, userData, navigate]);

  if (!token || !userData) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="flex flex-col md:flex-row overflow-hidden w-[100vw] h-[100vh] ">
      <img
        src={dashboard}
        alt="dashboardImage"
        className="w-full md:w-[50%] h-[50vh] md:h-full object-cover"
      />
      <div className="relative flex items-center justify-center h-[50vh] md:h-full w-full md:w-[50%] bg-indigo-950 p-4">
        <ArrowBackIcon
          className="absolute top-4 left-4 text-white cursor-pointer md:top-[10%] md:right-[90%] md:left-auto"
          style={{ fontSize: "40px", md: "80px" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="text-white text-center md:text-left">
          {user ? (
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-slate-400">
                Welcome, <span className="text-amber-400">{user.username}</span>
              </h1>
              <p className="text-xl md:text-3xl lg:text-5xl text-gray-500">
                Your current plan:{" "}
                <span className="text-orange-500">{user.plan}</span>
              </p>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
