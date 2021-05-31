import { Link } from 'react-router-dom'; 

import pet from '../../assets/pet.png';

import './style.css';

export default function CardPet({ id, name, photo }) {

  return (
    <div className="pet">
      <img src={photo === '' ? pet : photo} alt="pet foto" />
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