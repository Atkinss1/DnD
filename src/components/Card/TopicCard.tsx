import { renderTopicData } from "../../utils/Topics/RenderTopicData";

interface TopicCardProps  {
  topicData: Record<string, any>;
}

export const TopicCard = ({ topicData }: TopicCardProps) => { 
  
  const category = Object.keys(topicData)[0];
  const topic = topicData[category];

  console.log('topic in TopicCard: ', topic);

  return (
    <>
      <h3>Topic Data</h3>
      {renderTopicData(topicData)}
    </>
  )
};
