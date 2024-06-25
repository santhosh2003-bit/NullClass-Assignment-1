import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import store from "./store";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PlanList from "./Components/Plans/PlanList";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Home";
import Success from "./Actions/Success";
// import CreatePlan from "./Components/Auth/CreatePlan";

const stripePromise = loadStripe(
  "pk_test_51PKiKQSCQUdWAAwAurUrnIsfFAKTJUPag6GoELI9mRaaStP2BT5pAtaEsbH9dokDuYR9uGT70OD8lTd11EmQxPRx001azdexC2"
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/plans" element={<PlanList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/success" element={<Success />} />
            {/* <Route path="/create-plan" element={<CreatePlan />} /> */}
          </Routes>
        </Elements>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
