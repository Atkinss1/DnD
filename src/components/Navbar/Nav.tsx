// import { topics } from '../../assets/data/topics';'
import '../../assets/styles/Nav.scss';
import NavDrawer from './NavDrawer';

const Nav = () => {


  return (
    <div className="navbar-container">
      <div className="navbar-components">
        <div className="nav-bar-logo">
        </div>
        <div className="nav-bar-topics">
          <NavDrawer />
        </div>
      </div>
    </div>
  )
}

export default Nav;

