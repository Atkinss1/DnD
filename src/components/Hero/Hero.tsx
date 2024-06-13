import '../../assets/styles/hero.scss'

const Hero = () => {
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
    </div>
  )
} 

export default Hero;