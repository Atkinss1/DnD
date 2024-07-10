import { SingleTopicData } from "../../types/types";


export const fetchSingleTopic = async (api: string): Promise<SingleTopicData> => {
  try { 
    const response = await fetch(api);

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