import Form from "../../components/Form";
import Header from "../../components/Header";

import './style.css';

export default function CreatePet() {
  return(
    <div className="containerCreatePet">
      <Header path="/" page="home" />
      <main>
        <div className="container">
          <h3>Adicione seu pet</h3>
          <Form />
        </div>
      </main>
    </div>
  )
}