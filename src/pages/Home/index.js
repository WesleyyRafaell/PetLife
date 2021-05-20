import './style.css';

// components
import Header from '../../components/Header';
import Quote from '../../components/Quote';
import CardPet from '../../components/CardPet';

export default function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <main>
        <div className="containerQuote">
          <Quote />
        </div>
        <div className="containerCardsPets">
          <div className="pets">
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
            <CardPet />
          </div>
        </div>
      </main>
    </div>
  )
}