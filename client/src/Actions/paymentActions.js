export const subscribePlan =
  (planId, paymentMethodId) => async (dispatch, getState) => {
    const { auth } = getState();
    console.log(auth);
    try {
      await fetch("http://localhost:5000/api/payments/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({ planId, paymentMethodId }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // alert(data.message);
          dispatch({ type: "SUBSCRIBE_PLAN_SUCCESS", payload: data });
        });
    } catch (error) {
      dispatch({
        type: "SUBSCRIBE_PLAN_FAIL",
        payload: error.response.data.message,
      });
    }
  };
