import instagram from '../../assets/instagram.svg';
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
          {socialpet !== '' &&
            <div className="SocialItem">
              <img src={instagram} alt="" />
              <p>{socialpet}</p>
            </div>
          }

          {socialOwner !== '' &&
            <div className="SocialItem">
              <img src={instagram} alt="" />
              <p>{socialOwner}</p>
            </div>
          }
        </footer>
      </div>
    </div>
  )
}