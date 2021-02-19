import { ACCOUNT } from "../actions/types";
import fetchStatuses from "./fetchStatuses";

const DEFAULT_ACCOUNT = { loggedIn: false };

const account = (state = DEFAULT_ACCOUNT, action) => {
  switch (action.type) {
    case ACCOUNT.FETCH:
      return { ...state, status: fetchStatuses.fetching };
    case ACCOUNT.FETCH_ERROR:
      return { ...state, status: fetchStatuses.error, message: action.message };
    case ACCOUNT.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStatuses.success,
        message: action.message,
        loggedIn: true,
      };
    case ACCOUNT.FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        status: fetchStatuses.success,
        message: action.message,
        loggedIn: false,
      };
    case ACCOUNT.FETCH_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        status: fetchStatuses.success,
        message: action.message,
        loggedIn: action.authenticated,
      };
    default:
      return state;
  }
};

export default account;
