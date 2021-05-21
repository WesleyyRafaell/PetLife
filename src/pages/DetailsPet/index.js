import Header from "../../components/Header";

import pet from '../../assets/pet.svg';
import owner from '../../assets/owner.svg';

import './style.css';

export default function DetailsPet() {
  return (
    <div className="containerDetailsPet">
      <Header path="/" page="home" />
      <main>
        <div className="container">
          <div className="card">
            <div className="photoPet">
              <img src="https://i.imgur.com/AenYVrE.jpg" alt="pet foto" />
            </div>
            <div className="informationPet">
              <h3 className="name">Truta</h3>
              <p>Cachorro mais simpático, gente boa e perfeito que algúem poderia ter.</p>
              <p className="owner">Cuidado por: Wesley Rafael</p>
              <footer>
                <div className="SocialItem">
                  <img src={pet} alt="" />
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/princesa_lisbella/">https://www.instagram.com/princesa_lisbella/</a>
                </div>
                <div className="SocialItem">
                  <img src={owner} alt="" />
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/weslieysanto/">https://www.instagram.com/weslieysanto/</a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}