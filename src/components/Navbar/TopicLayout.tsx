import '../../assets/styles/topicLayout.scss';
// import { useTopicContext } from '../../context/Topic';
import { TopicProps } from '../../types/types';
import { fetchTopic } from '../../utils/fetchTopic';


const TopicLayout = ({ topic, length, index }: TopicProps) => {

  // const { setTopic } = useTopicContext();

  const handleClick = async () => {
    try { 
      const results = await fetchTopic(topic);
      console.log('results in TopicLayout', results);
    } catch (error) {
      console.log('error');
    }
  };

 
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