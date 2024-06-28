import { BASEURL } from "../constants";
import { ClassCardProps } from "../types/types";

export const fetchClass = async (cardTopic: string): Promise<ClassCardProps> => {
  try { 
      const response = await fetch(`${BASEURL}${cardTopic}`);

    if (response.ok) {
      const data = await response.json();
      console.log('fetchClass', data);
      return data.results;
    } else {
      throw new Error('Something went wrong: ');
    }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unknown error has occured');
      }
    }
    
  };