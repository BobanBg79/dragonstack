import { GENERATION } from "../actions/types";
import fetchStatuses from "./fetchStatuses";

const DEFAULT_GENERATION = { generationId: "", expiration: "" };

const generationReducer = (state = DEFAULT_GENERATION, action) => {
  switch (action.type) {
    case GENERATION.FETCH:
      return { ...state, status: fetchStatuses.fetching };
    case GENERATION.FETCH_ERROR:
      return { ...state, status: fetchStatuses.error, message: action.message };
    case GENERATION.FETCH_SUCCESS:
      return { ...state, status: fetchStatuses.success, ...action.generation };
    default:
      return state;
  }
};

export default generationReducer;
