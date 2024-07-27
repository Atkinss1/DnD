import { BaseCategoryResults } from "../../types/types";


export const fetchAllCategories = async (api: string): Promise<BaseCategoryResults> => {
  try { 
    const response = await fetch('http://localhost:3000/graphql', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: ` query {
            ${api} {
              index
              name
            }
        }`
      })
      });

    if (response.ok) {
      const category = await response.json();
      console.log('data: ', category.data[api]);
      return category.data[api];
    } else {
      throw new Error('Something went wrong: ');
    };
  } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unknown error has occured');
      }
    }
  };