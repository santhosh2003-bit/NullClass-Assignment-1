const initialState = {
  upload_plans: [],
  error: null,
};

export const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PLAN_SUCCESS":
      return {
        ...state,
        plans: [...state.plans, action.payload],
        error: null,
      };
    case "CREATE_PLAN_FAIL":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
