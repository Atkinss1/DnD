import React, { createContext } from "react";
import { CategoryAction, CategoryProviderProps, CategoryState } from "../types/types";

const CategoryContext = createContext <{
  state: CategoryState;
  dispatch: React.Dispatch<CategoryAction>;
}>

const initialState: CategoryState = {
  categories: [],
  topics: {},
  loadingCategories: false,
  loadingTopics: false,
  error: null
}