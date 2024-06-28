import { useEffect, useMemo, useState } from "react";
import { fetchCategories } from "../utils/fetchCategories";
import { Topics } from "../types/types";

export const useCategories = (): Topics => { 
  const [categories, setCategories] = useState<Topics>({});

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching categories: ', error);
      }
    };

    fetchData();
  }, []);
  
  const memoizedCategories = useMemo(() => categories, [categories]);

  return memoizedCategories;

};