import { Link } from 'react-router-dom'; 

import truta from '../../assets/truta.svg';

import './style.css';

export default function CardPet({ id, name }) {

  return (
    <div className="pet">
      <img src={truta} alt="pet foto" />
      <h3>{name}</h3>
      <Link to={{
        pathname: '/details-pet',
        state: id
      }}>
        Detalhes
      </Link>
    </div> 
  )
}