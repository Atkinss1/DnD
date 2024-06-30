import { useEffect, useMemo, useState } from "react";
import { Topics } from "../../types/types";
import { fetchAllCategories } from "../../utils/Categories/fetchAllCategories";

// Memoize Categories

export const useCategories = (): Topics => { 
  const [categories, setCategories] = useState<Topics>({});

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const categoryData = await fetchAllCategories();
        setCategories(categoryData);
      } catch (error: unknown) {
        console.error('Error fetching categories: ', error);
      }
    };

    fetchData();
  }, []);
  
  const memoizedCategories = useMemo(() => categories, [categories]);

  return memoizedCategories;

};