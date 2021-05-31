import petIcon from '../../assets/pet.svg';
import ownerIcon from '../../assets/owner.svg';
import pet from '../../assets/pet.png';

import './style.css';

export default function CardPetDetail({
  name,
  description,
  socialpet,
  photoPet,
  owner,
  socialOwner
}) {

  return (
    <div className="card">
      <div className="photoPet">
        {photoPet === '' ?
          <div className="emptyPhotoContainer">
            <img src={pet} alt="pet foto" />
          </div>
          :
          <img src={photoPet} className="photoPet" alt="pet foto" />
        }
      </div>
      <div className="informationPet">
        <h3 className="name">{name}</h3>
        <p>{description}</p>
        <p className="owner">Cuidado por: {owner}</p>
        <footer>
          <div className="SocialItem">
            <img src={petIcon} alt="" />
            <a target="_blank" rel="noreferrer" href={socialpet} >{socialpet}</a>
          </div>
          <div className="SocialItem">
            <img src={ownerIcon} alt="" />
            <a target="_blank" rel="noreferrer" href={socialOwner} >{socialOwner}</a>
          </div>
        </footer>
      </div>
    </div>
  )
}