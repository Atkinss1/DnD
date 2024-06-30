import { useEffect, useMemo, useState } from "react";
import { BASEURL } from "../../constants";
import { AbilityScores } from "../../types/types";
import { fetchAllAbilityScores } from "../../utils/Categories/fetchAllAbilityScores";

// Memoize AbilityAttributes

export const useAbilityScores =  (): AbilityScores => {
  const [abilityScore, setAbilityScore] = useState<AbilityScores>([]);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const abilityScoreData = await fetchAllAbilityScores(`${BASEURL}/api/ability-scores`);
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