import { Link } from 'react-router-dom'; 

import truta from '../../assets/truta.svg';

import './style.css';

export default function CardPet({ id, name, photo }) {

  return (
    <div className="pet">
      <img src={photo} alt="pet foto" />
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