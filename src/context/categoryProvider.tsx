import { ReactNode, createContext } from "react";
import { BaseCategoryResults } from "../types/types";
import { useCategory } from "../hooks/useCategory";

const CategoryContext = createContext<BaseCategoryResults | undefined>(undefined);

interface CategoryProviderProps {
  categoryAPI: string;
  children: ReactNode;
}

export const CategoryProvider = ({ categoryAPI, children }: CategoryProviderProps) => {
  const category = useCategory(categoryAPI);

  return (
    <CategoryContext.Provider value={category}>
      {children}
    </CategoryContext.Provider>
  )
}