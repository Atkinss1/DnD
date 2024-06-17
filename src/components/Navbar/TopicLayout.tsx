import { useState } from 'react';
import '../../assets/styles/topicLayout.scss';
import { fetchTopic } from '../../utils/fetchTopic';

interface TopicProps {
  topic: string;
  length: number;
  index: number;
}


const TopicLayout = ({ topic, length, index }: TopicProps) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => { 
    try { 
      const result = await fetchTopic(topic);
      setData(result);
      console.log(result);
      setError(null);
    } catch (error: unknown) {
      setError('Failed to fetch data.');
      }
    }
 
  return (
    <>
      <button onClick={handleClick} className='topic-button'>
          {topic}
      </button>
      {index + 1 !== length && <p>|</p>}
    </>
  )
};

export default TopicLayout;