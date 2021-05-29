import petIcon from '../../assets/pet.svg';
import ownerIcon from '../../assets/owner.svg';

import './style.css';

export default function CardPetDetail({ 
  name, 
  description, 
  socialNetworkPet, 
  photoPet, 
  owner, 
  socialNetworkOwner
 }) {
   
  return (
    <div className="card">
      <div className="photoPet">
        <img src={photoPet} alt="pet foto" />
      </div>
      <div className="informationPet">
        <h3 className="name">{name}</h3>
        <p>{description}</p>
        <p className="owner">Cuidado por: {owner}</p>
        <footer>
          <div className="SocialItem">
            <img src={petIcon} alt="" />
            <a target="_blank" rel="noreferrer" href={socialNetworkPet} >{socialNetworkPet}</a>
          </div>
          <div className="SocialItem">
            <img src={ownerIcon} alt="" />
            <a target="_blank" rel="noreferrer" href={socialNetworkOwner} >{socialNetworkOwner}</a>
          </div>
        </footer>
      </div>
    </div>
  )
}