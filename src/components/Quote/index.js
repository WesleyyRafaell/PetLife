import quote from '../../assets/quote.svg';

import './style.css';

export default function Quote() {
  return (
    <div className="quote">
      <img src={quote} alt="quote icon" />
      <div className="quoteContent">
        <h3>“A compaixão para com os animais é das mais nobres virtudes da natureza humana.”</h3>
        <p>Charles Darwin</p>
      </div>
    </div>
  )
}