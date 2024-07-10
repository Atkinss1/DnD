import { RenderTopicData } from "../../utils/Topics/RenderTopicData";

export interface TopicCardProps  {
  topicData: Record<string, any>;
}

export const TopicCard = ({ topicData }: TopicCardProps) => { 

  return (
    <>
      <RenderTopicData topicData={topicData}/>
    </>
  )
};
