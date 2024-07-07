import { Categories} from "../../types/types";


export const fetchAllCategories = async (api: string): Promise<Categories> => {
  try { 
      const response = await fetch(api);

    if (response.ok) {
      const data = await response.json();
      console.log('fetchAllCategories', data);
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