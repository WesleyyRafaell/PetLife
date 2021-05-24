import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../configs/FirebaseConnection';


// components 
import Header from "../../components/Header";
import CardPetDetail from '../../components/CardPetDetail';

import './style.css';
import LoaderSpinner from '../../components/Loader';

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
            socialNetworkOwner: snapshot.data().socialNetworkOwner,
            owner: snapshot.data().owner,
            socialNetworkPet: snapshot.data().socialNetworkPet
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
              socialNetworkPet={pet.socialNetworkPet}
              owner={pet.owner}
              socialNetworkOwner={pet.socialNetworkOwner}
            />
          }
        </div>
      </main>
    </div>
  )
}