const initialState = { plans: [], error: null };

export const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLANS_SUCCESS":
      return { ...state, plans: action.payload };
    case "FETCH_PLANS_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
