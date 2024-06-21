import { Topics } from "../types/types";


export const fetchTopic = async (cardTopic: string): Promise<Topics> => {
    try { 
      const response = await fetch(`https://www.dnd5eapi.co/api/${cardTopic}`);

    if (response.ok) {
      const data = await response.json();
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