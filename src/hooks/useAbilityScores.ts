import { useEffect, useMemo, useState } from "react";
import { AbilityScores } from "../types/types";
import { fetchAllAbilityScores } from "../utils/Categories/fetchAllAbilityScores";
import { BASEURL } from "../constants";

export const useAbilityScores =  (): AbilityScores | undefined => {
  const [abilityScore, setAbilityScore] = useState<AbilityScores | undefined>(undefined);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const abilityScoreData = await fetchAllAbilityScores(`${BASEURL}/api/ability-scores`);
        console.log(abilityScoreData);
        setAbilityScore(abilityScoreData);
      } catch (error: unknown) {
        console.error('Error fetching categories: ', error);
      }
    };
    
    fetchData();
  }, []);

  const memoizedAbilityScores = useMemo(() => abilityScore, [abilityScore]);

  return memoizedAbilityScores;

}