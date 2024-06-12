import './Nav.scss'
import { topics } from '../../assets/styles/data/topics';

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-components">
        <div className="nav-bar-title">
          D&D Creator
        </div>
        <div className="nav-bar-topics">
          {topics.map(topic => {
            return <>
              <h3>{topic}</h3>
              <p>|</p>
            </>
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav;

