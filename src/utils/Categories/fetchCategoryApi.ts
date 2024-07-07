
interface fetchCategoryApiProps {
  category?: string;
  topic?: string;
  fetchCategoryData?: (apiPath: string) => void;
  apiPath: string;
}

export const fetchCategoryApi = ({ category, topic, fetchCategoryData, apiPath }: fetchCategoryApiProps) => {
  if ( category && !topic && fetchCategoryData) {
    fetchCategoryData(apiPath);
  }
};