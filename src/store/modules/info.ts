// @ts-nocheck
import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";

export const constants = {
  GET_SITES_NAME_LIST: createSagaAction("GET_SITES_NAME_LIST"),
};

export const actions = {
  getSitesNameList: (next: () => void) => ({
    type: constants.GET_SITES_NAME_LIST.ACTION,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.GET_SITES_NAME_LIST.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_SITES_NAME_LIST.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_SITES_NAME_LIST.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },
};

export const initialState = {
  error: false,
  errorMessage: "",
  isLoading: false,
};

export default createReducer(initialState, (state, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : { ...state, isLoading: false };
});
