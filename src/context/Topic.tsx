import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Topics } from "../types/types";

interface TopicContextType {
  topics: Topics[];
  setTopic: Dispatch<SetStateAction<Topics[]>>;
}

const TopicContext = createContext<TopicContextType | undefined>(undefined);

const TopicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topics, setTopic] = useState<Topics[]>([]);

  
  return (
    <TopicContext.Provider value={{ topics, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

const useTopicContext = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error('useTopicContext must be used within a TopicProvider.');
  }
  return context;
};

export { TopicProvider, useTopicContext };
