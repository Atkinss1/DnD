
interface fetchCategoryApiProps {
  category?: string;
  topic?: string;
  fetchCategoryData?: (apiPath: string) => void;
  clearTopicApi?: () => void;
  apiPath: string;
}


export const fetchCategoryApi = ({ category, topic, fetchCategoryData, clearTopicApi, apiPath }: fetchCategoryApiProps) => {
  
  if (!category && clearTopicApi) {
    clearTopicApi();
  }

  if (category && !topic && fetchCategoryData && clearTopicApi) {
    clearTopicApi();
    fetchCategoryData(apiPath);
  }
};