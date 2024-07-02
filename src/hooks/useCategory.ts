import { useEffect, useState,} from "react";
import { BaseCategoryResults } from "../types/types";

import { BASEURL } from "../constants";
import { fetchCategory } from "../utils/Categories/fetchCategory";

export const useCategory =  (categoryAPI: string): BaseCategoryResults => {
  const [category, setCategory] = useState<BaseCategoryResults>([]);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const data = await fetchCategory(`${BASEURL}${categoryAPI}`);
        console.log('Category', data);
        setCategory(data);
      } catch (error: unknown) {
        console.error('Error fetching categories: ', error);
      }
    };
    
    fetchData();
  }, []);

  return category;
}