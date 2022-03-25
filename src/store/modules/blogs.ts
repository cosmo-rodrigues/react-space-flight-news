// @ts-nocheck
import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";

export const constants = {
  GET_ALL_BLOGS: createSagaAction("GET_ALL_BLOGS"),
  GET_BLOGS_COUNT: createSagaAction("GET_BLOGS_COUNT"),
  GET_BLOG_BY_ID: createSagaAction("GET_BLOG_BY_ID"),
  GET_LAUNCH_BY_ID: createSagaAction("GET_LAUNCH_BY_ID"),
  GET_EVENT_BY_ID: createSagaAction("GET_EVENT_BY_ID"),
};

export const actions = {
  getAllBlogs: (next: () => void) => ({
    type: constants.GET_ALL_BLOGS.ACTION,
    next,
  }),
  getBlogsCount: (next: () => void) => ({
    type: constants.GET_BLOGS_COUNT.ACTION,
    next,
  }),
  getBlogById: (next: () => void) => ({
    type: constants.GET_BLOG_BY_ID.ACTION,
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
  [constants.GET_ALL_BLOGS.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ALL_BLOGS.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ALL_BLOGS.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_BLOGS_COUNT.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_BLOGS_COUNT.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_BLOGS_COUNT.FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_BLOG_BY_ID.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_BLOG_BY_ID.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_BLOG_BY_ID.FAILED]: (state, action) => {
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
