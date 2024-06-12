interface TopicProps {
  topic: string;
  length: number;
  index: number;
}

const TopicLayout = ({ topic, length, index }: TopicProps) => {
  return (
    <>
      <h3>{topic}</h3>
      {index + 1 !== length && <p>|</p>}
    </>
  )
};

export default TopicLayout;