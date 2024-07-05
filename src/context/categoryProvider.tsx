import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { CategoryState } from "../types/types";
import { categoryReducer, initialState } from "../reducer/categoryReducer";
import { BASEURL } from "../constants";
import { fetchAllTopics } from "../utils/Categories/fetchAllTopics";

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

  return (
    <CategoryContext.Provider value={state}>
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