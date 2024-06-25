const Plan = require("../models/Plan");
const createPlan = async (req, res) => {
  const { name, price, duration, features, stripeProductId, stripePriceId } =
    req.body;
  try {
    const newPlan = new Plan({
      name,
      price,
      duration,
      features,
      stripeProductId,
      stripePriceId,
    });
    const savePlan = await newPlan.save();
    return res.status(201).json(savePlan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
const getPlan = async (req, res) => {
  try {
    const plan = await Plan.find();
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { getPlan, createPlan };
