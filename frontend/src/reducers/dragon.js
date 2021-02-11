import { DRAGON } from "../actions/types";
import fetchStatuses from "./fetchStatuses";

const DEFAULT_DRAGON = {
  generationId: "",
  dragonId: "",
  nickname: "",
  birthdate: "",
  traits: [],
};

const dragonReducer = (state = DEFAULT_DRAGON, action) => {
  switch (action.type) {
    case DRAGON.FETCH:
      return { ...state, status: fetchStatuses.fetching };
    case DRAGON.FETCH_ERROR:
      return { ...state, status: fetchStatuses.error, message: action.message };
    case DRAGON.FETCH_SUCCESS:
      return { ...state, status: fetchStatuses.success, ...action.dragon };
    default:
      return state;
  }
};

export default dragonReducer;
