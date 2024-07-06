// import { topics } from '../../assets/data/topics';'
import '../../assets/styles/Nav.scss';
import NavDrawer from './NavDrawer';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="navbar-components">
        <div className="nav-bar-logo" onClick={() => navigate('/')}>
        </div>
        <div className="nav-bar-topics">
          <NavDrawer />
        </div>
      </div>
    </div>
  )
}

export default Nav;

