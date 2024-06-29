import { BASEURL } from "../constants";
import { Topics } from "../types/types";


export const fetchCategories = async (): Promise<Topics> => {
  try { 
      const response = await fetch(`${BASEURL}/api`);

    if (response.ok) {
      const data = await response.json();
      return data;
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