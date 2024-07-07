
// Topics Interfaces

export interface Topics {
  [key: string]: string;
}

export interface TopicCardProps {
  name: string;
  url: string;
}

export interface SingleTopicData {
  index: string;
  name: string;
  desc: string[];
  url: string;
}

// Category Interfaces

export interface BaseCharacterInterface extends TopicCardProps {
  index: string;
}

export type BaseCategoryResults = BaseCharacterInterface[];


export interface Categories {
  [key: string]: string;
}

// Reducer interfaces / types

export interface CategoryProviderProps {
  categoryAPI: string;
  children: ReactNode;
}

export type CategoryState = {
  categories: BaseCategoryResults;
  categoryAPI: string;
  topics: Topics;
  topicAPI: string;
  topicData: {
    [key: string]: SingleTopicData;
  };
  loadingCategories: boolean;
  loadingTopics: boolean;
  error: string | null;
  fetchCategoryData?: (api: string) => Promise<void>;
  fetchTopicData?: (api: string) => Promise<void>;
  clearTopicApi?: () => void;
}

export type CategoryAction =
  | { type: "SET_CATEGORY_API"; payload: string }
  | { type: "SET_TOPIC_API"; payload: string }
  | { type: "FETCH_CATEGORIES_REQUEST" }
  | { type: "FETCH_CATEGORIES_SUCCESS"; payload: BaseCategoryResults }
  | { type: "FETCH_CATEGORIES_FAILURE"; error: unknown }
  | { type: "FETCH_TOPICS_REQUEST" }
  | { type: "FETCH_TOPICS_SUCCESS"; payload: Topics }
  | { type: "FETCH_TOPICS_FAILURE"; error: unknown }
  | { type: "FETCH_SINGLE_TOPIC_SUCCESS"; payload: SingleTopicData }
  | { type: "FETCH_SINGLE_TOPIC_FAILURE"; error: unknown }
  | { type: "CLEAR_TOPIC_API"; payload: string };