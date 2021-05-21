import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import iconAdd from '../../assets/icon-add.svg';
import goback from '../../assets/goback.svg';

import './style.css';


export default function Header({ path, page }) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo pet life" />
          </Link>
        </div>
        {page === 'home' ?
          <div className="button">
            <Link to={path}>
              <img src={goback} alt="icone adicionar" />
            </Link>
          </div>
          :
          <div className="button">
            <Link to={path}>
              <img src={iconAdd} alt="icone adicionar" />
            </Link>
          </div>
        }
      </div>
    </header>
  )
}