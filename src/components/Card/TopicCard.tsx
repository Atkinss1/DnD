
interface TopicCardProps  {
  topicData: Record<string, any>;
}

export const TopicCard = ({ topicData }: TopicCardProps) => { 
  
  const category = Object.keys(topicData)[0];
  const topic = topicData[category];

  console.log('topic in TopicCard: ', topic);

  return (
    <>
    </>
  )
};
