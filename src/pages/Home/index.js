

import './style.css';

// components
import Header from '../../components/Header';
import Quote from '../../components/Quote';

export default function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <main>
        <div className="containerQuote">
          <Quote />
        </div>
      </main>
    </div>
  )
}