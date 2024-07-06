
// Topics Interfaces

export interface Topics {
  [key: string]: string;
}

export interface TopicCardProps {
  name: string;
  url: string;
}

// Category Interfaces

export type BaseCategoryResults = BaseCharacterInterface[];

// Reducer interfaces / types

export interface CategoryProviderProps {
  categoryAPI: string;
  children: ReactNode;
}

export type CategoryState = {
  categories: BaseCategoryResults;
  categoryAPI: string;
  topics: Topics;
  loadingCategories: boolean;
  loadingTopics: boolean;
  error: string | null;
  fetchCategoryData?: (api: string) => Promise<void>;
}

export type CategoryAction =
  | { type: "SET_CATEGORY_API"; payload: string }
  | { type: "FETCH_CATEGORIES_REQUEST" }
  | { type: "FETCH_CATEGORIES_SUCCESS"; payload: BaseCategoryResults }
  | { type: "FETCH_CATEGORIES_FAILURE"; error: unknown }
  | { type: "FETCH_TOPICS_REQUEST" }
  | { type: "FETCH_TOPICS_SUCCESS"; payload: Topics }
  | { type: "FETCH_TOPICS_FAILURE"; error: unknown };