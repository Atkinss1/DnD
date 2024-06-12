import { topics } from '../../assets/styles/data/topics';
import './Nav.scss';
import TopicLayout from './TopicLayout';

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-components">
        <div className="nav-bar-logo">
        </div>
        <div className="nav-bar-topics">
          {topics.map((topic, index) =>
            <TopicLayout
              key={index}
              topic={topic}
              length={topics.length}
              index={index} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav;

