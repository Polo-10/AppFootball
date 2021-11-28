import { GET_SEARCH, LOADING_SEARCH } from "../types";

const initialValue = {
  loading: false,
  data: [],
};

export const searchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOADING_SEARCH:
      return {
        loading: true,
        data: {},
      };
    case GET_SEARCH:
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
