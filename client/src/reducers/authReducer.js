const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER_SUCCESS":
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "USER_REGISTER_FAIL":
    case "USER_LOGIN_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
