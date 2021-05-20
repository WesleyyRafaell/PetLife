import truta from '../../assets/truta.svg';

import './style.css';

export default function CardPet() {
  return (
    <div className="pet">
      <img src={truta} alt="pet foto" />
      <h3>Truta</h3>
      <button>Detalhes</button>
    </div>
  )
}