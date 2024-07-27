interface fetchTopicApiProps {
  fetchTopicData?: (api: string) => void;
  topic?: string;
  apiPath: string;
}

export const fetchTopicApi = ({ topic, apiPath, fetchTopicData }: fetchTopicApiProps) => {
  if (topic && fetchTopicData) {
    fetchTopicData(apiPath);
  }
};