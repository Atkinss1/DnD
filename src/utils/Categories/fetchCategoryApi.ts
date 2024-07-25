
interface fetchCategoryApiProps {
  category?: string;
  topic?: string;
  fetchCategoryData?: (apiPath: string) => void;
  clearTopicApi?: () => void;
  apiPath: string;
}


export const fetchCategoryApi = ({ category, topic, fetchCategoryData, clearTopicApi}: fetchCategoryApiProps) => {
  
  if (!category && clearTopicApi) {
    clearTopicApi();
  }

  if (category && !topic && fetchCategoryData && clearTopicApi) {
    clearTopicApi();
    fetchCategoryData(category);
  }
};