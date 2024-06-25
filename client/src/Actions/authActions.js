export const register = (userData) => async (dispatch) => {
  try {
    // const config = { headers: { "Content-Type": "application/json" } };
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
      });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error.message,
    });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      });
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error.message });
  }
};
