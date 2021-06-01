import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../configs/FirebaseConnection';
import LoaderSpinner from '../../components/Loader';


// components 
import Header from "../../components/Header";
import CardPetDetail from '../../components/CardPetDetail';

import './style.css';

export default function DetailsPet() {
  const [pet, setPet] = useState('');
  const { state } = useLocation();

  useEffect(() => {
    (
      async () => {
        try {
          const snapshot = await firebase.firestore().collection('Pet').doc(state).get();

          setPet({
            name: snapshot.data().name,
            description: snapshot.data().description,
            socialpet: snapshot.data().socialpet,
            photoPet: snapshot.data().urlPhoto,
            owner: snapshot.data().owner,
            socialOwner: snapshot.data().socialOwner,
          })

        } catch (error) {
          console.log('deu ruim:', error)
        }
      }
    )()
  }, [state])

  return (
    <div className="containerDetailsPet">
      <Header path="/" page="home" />
      <main>
        <div className="container">
          {pet === '' ?
            <div>
              <LoaderSpinner />
            </div> :

            <CardPetDetail
              name={pet.name}
              description={pet.description}
              socialpet={pet.socialpet}
              photoPet={pet.photoPet}
              owner={pet.owner}
              socialOwner={pet.socialOwner}
            />
          }
        </div>
      </main>
    </div>
  )
}