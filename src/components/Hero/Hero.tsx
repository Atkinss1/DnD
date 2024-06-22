import '../../assets/styles/hero.scss'
import { useTopicContext } from '../../context/Topic';


const Hero = () => {
  const { topics } = useTopicContext();

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
        {<p>Number of {topics.length}</p>}
        {topics.length > 0 ? (
          topics.map((topic) => (
            <div className='topic-card' key={topic.index}>
              <h1>{topic.name}</h1>
              <p>{topic.url}</p>
            </div>
          ))
        ) : (
            <p>No topics selected</p>
        )}
      </div>
    </div>
  )
} 

export default Hero;