// @ts-nocheck
import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";

export const constants = {
  GET_ALL_ARTICLES: createSagaAction("GET_ALL_ARTICLES"),
  GET_ARTICLES_COUNT: createSagaAction("GET_ARTICLES_COUNT"),
  GET_ARTICLE_BY_ID: createSagaAction("GET_ARTICLE_BY_ID"),
  GET_LAUNCH_BY_ID: createSagaAction("GET_LAUNCH_BY_ID"),
  GET_EVENT_BY_ID: createSagaAction("GET_EVENT_BY_ID"),
};

export const actions = {
  getAllArticles: (next: () => void) => ({
    type: constants.GET_ALL_ARTICLES.ACTION,
    next,
  }),
  getArticlesCount: (next: () => void) => ({
    type: constants.GET_ARTICLES_COUNT.ACTION,
    next,
  }),
  getArticleById: (next: () => void) => ({
    type: constants.GET_ARTICLE_BY_ID.ACTION,
    next,
  }),
  getLaunchById: (next: () => void) => ({
    type: constants.GET_LAUNCH_BY_ID.ACTION,
    next,
  }),
  getEventById: (next: () => void) => ({
    type: constants.GET_EVENT_BY_ID.ACTION,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.GET_ALL_ARTICLES.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ALL_ARTICLES.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ALL_ARTICLES.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_ARTICLES_COUNT.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ARTICLES_COUNT.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ARTICLES_COUNT.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_ARTICLE_BY_ID.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ARTICLE_BY_ID.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ARTICLE_BY_ID.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_EVENT_BY_ID.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_EVENT_BY_ID.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_EVENT_BY_ID.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_LAUNCH_BY_ID.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_LAUNCH_BY_ID.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_LAUNCH_BY_ID.FAILED]: (state, action) => {
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
