import { CategoryAction, CategoryState } from "../types/types";

export const initialState: CategoryState = {
  categories: [],
  categoryAPI: '/',
  topics: {},
  loadingCategories: false,
  loadingTopics: false,
  error: null
}

export const categoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => { 
  switch (action.type) {
    case "SET_CATEGORY_API":
      return {
        ...state,
        categoryAPI: action.payload
      };
    case "FETCH_CATEGORIES_REQUEST":
      return {
        ...state,
        loadingCategories: true,
        error: null
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
        loadingCategories: false,
        error: null
      };
    case "FETCH_CATEGORIES_FAILURE":
      return {
          ...state,
          loadingCategories: false,
          error: action.error instanceof Error? action.error.message : 'An unknown error occured'
      };
    case "FETCH_TOPICS_REQUEST":
      return {
        ...state,
        loadingTopics: true,
        error: null
      };
    case "FETCH_TOPICS_SUCCESS":
      return {
        ...state,
        topics: action.payload,
        loadingTopics: false,
        error: null
      };
    case "FETCH_TOPICS_FAILURE":
      return {
        ...state,
        loadingTopics: false,
        error: action.error instanceof Error? action.error.message : 'An unknown error occured'
        };
    default:
      return { ...state };
  }
};