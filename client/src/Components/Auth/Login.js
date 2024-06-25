import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Actions/authActions";
import { useNavigate } from "react-router-dom";
import loginImage from "../../images/loginimage.avif";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Image Section */}
      <img
        src={loginImage}
        alt="loginImage"
        className="hidden lg:block w-2/3 object-cover"
      />

      {/* Form Section */}
      <div className="w-full lg:w-1/3 flex items-center justify-center p-4">
        <div className="w-full max-w-md border rounded-xl p-3 pb-11 shadow-2xl">
          <h1 className="text-4xl font-bold text-center mb-6">Login Details</h1>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
            <label className="text-slate-400 text-xl mb-3">Enter Email</label>
            <input
              className="border rounded-2xl pl-3 pr-3 pt-2 pb-2 outline-none text-xl w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label className="text-slate-400 text-xl mb-3">
              Enter Password
            </label>
            <input
              className=" border rounded-2xl pl-3 pr-3 pt-2 pb-2 outline-none text-xl w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              className="btn w-full bg-blue-800 text-xl mt-4 rounded-xl text-white font-bold pb-2 pt-2"
              type="submit"
            >
              Login
            </button>
            <p className="text-center">
              If you don't have an Account{" "}
              <span
                className="font-bold text-blue-500 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
