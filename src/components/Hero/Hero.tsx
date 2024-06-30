import { useParams } from 'react-router-dom';
import '../../assets/styles/hero.scss';
import { useAbilityScores } from '../../hooks/useMemo/useAbilityScores';

const Hero = () => {

  const { category } = useParams();
  const abilityScores = useAbilityScores();
  console.log('Hero ability scores: ', abilityScores);

  return (
    <>
      <div className="hero-title">
        <h1>{category ? `Category: ${category}` : null}</h1>
      </div>

      {category ? (
        <h1>INSERT COMPONENT</h1>
      ) : (
          <div className="hero-container">
          <div className="hero-image">
            <div className="hero-image-text">
              <h2>Dungeons&Dragons</h2>
              <h3>Character Creator</h3>
              <p>Need a hand making your first character or NPC?</p>
            </div>
          </div>
        </div>
      )
       }
      
    </>
  )
} 

export default Hero;