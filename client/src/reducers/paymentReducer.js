const initialState = { subscription: null, error: null };

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBSCRIBE_PLAN_SUCCESS":
      return { ...state, subscription: action.payload };
    case "SUBSCRIBE_PLAN_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
