
import { AbilityScores } from "../../types/types";

export const fetchAllAbilityScores = async (api: string): Promise<AbilityScores> => {
  try {
    const response = await fetch(`${api}`);

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