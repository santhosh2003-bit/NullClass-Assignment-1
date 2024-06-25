export const getPlans = () => async (dispatch) => {
  try {
    await fetch("https://nullclass-assignment-1.onrender.com/api/plans/plans", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: "FETCH_PLANS_SUCCESS", payload: data });
      });
  } catch (error) {
    dispatch({
      type: "FETCH_PLANS_FAIL",
      payload: error.message,
    });
  }
};

export const createPlan = (planData) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://nullclass-assignment-1.onrender.com/api/plans/plans",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(planData),
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "CREATE_PLAN_SUCCESS",
        payload: data,
      });
      console.log(data);
    } else {
      dispatch({
        type: "CREATE_PLAN_FAIL",
        payload: data.message || "Failed to create plan",
      });
      console.log(data.message);
    }
  } catch (error) {
    dispatch({
      type: " CREATE_PLAN_FAIL",
      payload: error.message,
    });
  }
};
