import '../../assets/styles/topicLayout.scss';

interface TopicProps {
  topic: string;
  length: number;
  index: number;
}

const TopicLayout = ({ topic, length, index }: TopicProps) => {
  return (
    <>
      <button className='topic-button'>
          {topic}
      </button>
      {index + 1 !== length && <p>|</p>}
    </>
  )
};

export default TopicLayout;