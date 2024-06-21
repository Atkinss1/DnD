import React from "react";

export interface Topics {
  index: string;
  name: string;
  url: string;
}

export interface TopicProps {
  topic: string;
  length: number;
  index: number;
}

type SetTopicProps<T> = {
  setTopic: React.Dispatch<React.SetStateAction<T>>
}