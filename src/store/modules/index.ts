import { combineReducers } from "redux";
import articles from "./articles";
import blogs from "./blogs";
import info from "./info";
import reports from "./reports";

export const rootReducers = combineReducers({ articles, blogs, info, reports });

export default {
  articles,
  blogs,
  info,
  reports,
};
