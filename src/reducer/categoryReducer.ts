import { CategoryAction, CategoryState } from "../types/types";

export const initialState: CategoryState = {
  categories: [],
  categoryAPI: '/',
  topics: {},
  topicAPI: '',
  topicData: {},
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
    case "SET_TOPIC_API":
      return {
        ...state,
        topicAPI: action.payload
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
          error: action.error instanceof Error ? action.error.message : 'An unknown error occured'
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
        error: action.error instanceof Error ? action.error.message : 'An unknown error occured'
      };
    case "FETCH_SINGLE_TOPIC_SUCCESS":
      return {
        ...state,
        topicData: {
          [action.payload.index]: action.payload
        }
      };
    case "FETCH_SINGLE_TOPIC_FAILURE":
      return {
        ...state,
        error: action.error instanceof Error ? action.error.message : 'An unknown error occured'
      };
    case "CLEAR_TOPIC_API":
      return {
        ...state,
        topicAPI: action.payload
      };
    default:
      return { ...state };
  }
};