import '../../assets/styles/hero.scss'
import { useTopicContext } from '../../context/Topic';
import validArray from '../../utils/validArray';
import ClassCard from '../Card/ClassCard';
import TopicCard from '../Card/TopicCard';

const Hero = () => {
  const { topics, topicInfo} = useTopicContext();

  return (
    <div className="hero-container">
      <div className="hero-image">
        <div className="hero-image-text">
          <h2>Dungeons&Dragons</h2>
          <h3>Character Creator</h3>
          <p>Need a hand making your first character or NPC?</p>
        </div>
        <button className='hero-button'>Start Here!</button>
      </div>
      <div className='topic-container'>
        {topics && validArray(topics) ? (
          topics.map((topic) => (
            <TopicCard key={topic.index} name={topic.name} url={topic.url} />
          ))
        ) : topics ?
          <ClassCard key={topicInfo?.index} class_levels={topicInfo?.class_levels} />
          : null
        }
      </div>
    </div>
  )
} 

export default Hero;