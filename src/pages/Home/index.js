import { useEffect, useState } from 'react';
import firebase from '../../configs/FirebaseConnection';


import './style.css';

// components
import Header from '../../components/Header';
import Quote from '../../components/Quote';
import CardPet from '../../components/CardPet';
import LoaderSpinner from '../../components/Loader';

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    (
      async () => {
        try {
          const snapshot = await firebase.firestore().collection('Pet').get();
          const list = [];

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              name: doc.data().name,
              description: doc.data().description,
              socialNetworkPet: doc.data().socialNetworkPet,
              owner: doc.data().owner,
              socialNetworkOwner: doc.data().socialNetworkOwner
            })
          })

          setPets(list);

        } catch (error) {
          console.log('Deu ruim:', error)
        }
      }
    )()
  }, [])

  return (
    <div className="homeContainer">
      <Header path="/create-pet" page="create" />
      <main>
        <div className="containerQuote">
          <Quote />
        </div>
        <div className="containerCardsPets">
          <div className="pets">
            {pets.length === 0 ?
              <div>
                <LoaderSpinner />
              </div>
              :
              pets.map(({ id, name }) => (
                <CardPet key={id} name={name} />
              ))
            }
          </div>
        </div>
      </main>
    </div>
  )
}