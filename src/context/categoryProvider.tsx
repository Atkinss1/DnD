import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { BASEURL } from "../constants";
import { categoryReducer, initialState } from "../reducer/categoryReducer";
import { CategoryState } from "../types/types";
import { fetchAllCategories } from "../utils/Categories/fetchAllCategories";
import { fetchAllTopics } from "../utils/Topics/fetchAllTopics";
import { fetchSingleTopic } from "../utils/Topics/fetchSingleTopic";

export const CategoryContext = createContext<CategoryState>(initialState);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {

  const [state, dispatch] = useReducer(categoryReducer, initialState);
  
  useEffect(() => { 
    const fetchData = async () => {
      try { 
        dispatch({ type: "FETCH_TOPICS_REQUEST" });
        const topics = await fetchAllTopics(`${BASEURL}/api`);

        dispatch({ type: "FETCH_TOPICS_SUCCESS", payload: topics });
      } catch (error: unknown) { 
        dispatch({ type: "FETCH_CATEGORIES_FAILURE", error: error });
        dispatch({ type: "FETCH_TOPICS_FAILURE", error: error });
      };
    };

    fetchData();
  }, []);

  const fetchCategoryData = async (api: string) => {
    try {
      dispatch({ type: "FETCH_CATEGORIES_REQUEST" });
      const categoryData = await fetchAllCategories(`${BASEURL}${api}`);

      dispatch({ type: "SET_CATEGORY_API", payload: api });
      dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categoryData });
    } catch (error: unknown) {
      dispatch({ type: "FETCH_CATEGORIES_FAILURE", error: error });
    };
  };

  const fetchTopicData = async (api: string) => { 
    try {
      dispatch({ type: "FETCH_TOPICS_REQUEST" });
      const topicData = await fetchSingleTopic(`${BASEURL}${api}`);

      dispatch({ type: "SET_TOPIC_API", payload: api });
      dispatch({ type: "FETCH_SINGLE_TOPIC_SUCCESS", payload: topicData });
    } catch (error: unknown) {
      dispatch({ type: "FETCH_SINGLE_TOPIC_FAILURE", error: error })
    }
  };

  const clearTopicApi = () => { 
    dispatch({ type: "CLEAR_TOPIC_API", payload: '' });
  };

  const value = {
    ...state,
    fetchCategoryData,
    fetchTopicData,
    clearTopicApi
  }

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryContext =  () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider.');
  }

  return context;
}