import { useEffect, useState } from "react";
import { BASEURL } from "../constants";
import { Topics } from "../types/types";
import { fetchAllTopics } from "../utils/Topics/fetchAllTopics";

export const useTopic = (): Topics => { 
  const [topics, setTopics] = useState<Topics>({});

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const data = await fetchAllTopics(`${BASEURL}/api`);
        console.log('Topics Data: ', data);
        setTopics(data);
      } catch (error: unknown) {
        console.error('Error fetching categories: ', error);
      }
    };

    fetchData();
  }, []);
  
  return topics;
};