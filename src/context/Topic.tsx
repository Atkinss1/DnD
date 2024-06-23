import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { ClassCardProps, Topics } from "../types/types";

interface TopicContextType {
  topics: Topics[];
  topicInfo: ClassCardProps | undefined;
  setTopic: Dispatch<SetStateAction<Topics[]>>;
  setTopicInfo: Dispatch<SetStateAction<ClassCardProps | undefined>>;
}

const TopicContext = createContext<TopicContextType | undefined>(undefined);

const TopicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topics, setTopic] = useState<Topics[]>([]);
  const [topicInfo, setTopicInfo] = useState<ClassCardProps | undefined>(undefined);

  
  return (
    <TopicContext.Provider value={{ topics, setTopic, topicInfo, setTopicInfo}}>
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
