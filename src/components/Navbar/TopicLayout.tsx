import '../../assets/styles/topicLayout.scss';
import { fetchTopic } from '../../utils/fetchTopic';

interface TopicProps {
  topic: string;
  length: number;
  index: number;
}


const TopicLayout = ({ topic, length, index }: TopicProps) => {
 
  return (
    <>
      <button onClick={() => fetchTopic(topic)} className='topic-button'>
          {topic}
      </button>
      {index + 1 !== length && <p>|</p>}
    </>
  )
};

export default TopicLayout;