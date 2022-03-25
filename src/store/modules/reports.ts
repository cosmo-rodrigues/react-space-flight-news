// @ts-nocheck
import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";

export const constants = {
  GET_ALL_REPORTS: createSagaAction("GET_ALL_REPORTS"),
  GET_REPORTS_COUNT: createSagaAction("GET_REPORTS_COUNT"),
  GET_REPORT_BY_ID: createSagaAction("GET_REPORT_BY_ID"),
};

export const actions = {
  getAllReports: (next: () => void) => ({
    type: constants.GET_ALL_REPORTS.ACTION,
    next,
  }),
  getReportsCount: (next: () => void) => ({
    type: constants.GET_REPORTS_COUNT.ACTION,
    next,
  }),
  getReportById: (next: () => void) => ({
    type: constants.GET_REPORT_BY_ID.ACTION,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.GET_ALL_REPORTS.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ALL_REPORTS.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ALL_REPORTS.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_REPORTS_COUNT.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_REPORTS_COUNT.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_REPORTS_COUNT.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_REPORT_BY_ID.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_REPORT_BY_ID.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_REPORT_BY_ID.FAILED]: (state, action) => {
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
