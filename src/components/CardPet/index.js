import { Link } from 'react-router-dom'; 

import truta from '../../assets/truta.svg';

import './style.css';

export default function CardPet() {
  return (
    <div className="pet">
      <img src={truta} alt="pet foto" />
      <h3>Truta</h3>
      <Link to="/details-pet">
        Detalhes
      </Link>
    </div>
  )
}