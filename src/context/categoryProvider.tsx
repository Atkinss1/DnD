import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { CategoryState } from "../types/types";
import { categoryReducer, initialState } from "../reducer/categoryReducer";
import { BASEURL } from "../constants";
import { fetchAllTopics } from "../utils/Categories/fetchAllTopics";
import { fetchCategory } from "../utils/Categories/fetchCategory";

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
      const categoryData = await fetchCategory(`${BASEURL}${api}`);

      dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categoryData });
    } catch (error: unknown) {
      dispatch({ type: "FETCH_CATEGORIES_FAILURE", error: error });
    };
  };

  const value = {
    ...state,
    fetchCategoryData
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