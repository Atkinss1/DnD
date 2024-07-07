import { CardProps } from "../../types/types";

interface TopicCardProps extends CardProps {
}

export const TopicCard = ({ name, url, ...topicData }: TopicCardProps) => { 
  
  console.log('topicData', topicData);
  return (
    <>
      {name}
      {url}
    </>
  )
};
