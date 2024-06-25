import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createPlan } from "../../Actions/planActions";

const CreatePlan = () => {
  const [planName, setPlanName] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState("");
  const [stripeProductId, setStripeProductId] = useState("");
  const [stripePriceId, setStripePriceId] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const featuresArray = features.split(",").map((feature) => feature.trim());
    dispatch(
      createPlan({
        name: planName,
        price: parseFloat(planPrice),
        duration: duration,
        features: featuresArray,
        stripeProductId: stripeProductId,
        stripePriceId: stripePriceId,
      })
    );
    setPlanName("");
    setPlanPrice("");
    setDuration("");
    setFeatures("");
    setStripeProductId("");
    setStripePriceId("");
  };

  return (
    <div>
      <h1>Create a Plan</h1>

      <form onSubmit={handleSubmit}>
        <label>Plan Name</label>
        <input
          type="text"
          placeholder="Ex: Premium Plan"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
          required
        />
        <label>Price Of Plan</label>
        <input
          type="number"
          placeholder="Ex: 100"
          value={planPrice}
          onChange={(e) => setPlanPrice(e.target.value)}
          required
        />
        <label>Duration</label>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        >
          <option value="">Select Duration</option>
          <option value="monthly">Month</option>
          <option value="yearly">Year</option>
        </select>
        <label>Features (comma separated)</label>
        <input
          type="text"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          placeholder="Feature1, Feature2, Feature3"
          required
        />
        <label>Stripe Product Id</label>
        <input
          type="text"
          placeholder="Stripe Product Id"
          value={stripeProductId}
          onChange={(e) => setStripeProductId(e.target.value)}
          required
        />
        <label>Stripe Price Id</label>
        <input
          type="text"
          placeholder="Stripe Price Id"
          value={stripePriceId}
          onChange={(e) => setStripePriceId(e.target.value)}
          required
        />
        <button type="submit">Create Plan</button>
      </form>
    </div>
  );
};

export default CreatePlan;
