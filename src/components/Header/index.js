import logo from '../../assets/logo.svg';
import iconAdd from '../../assets/icon-add.svg';

import './style.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="logo pet life" />
        <button>
          <img src={iconAdd} alt="icone adicionar" />
        </button>
      </div>
    </header>
  )
}