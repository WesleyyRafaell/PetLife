import Input from '../Input';
import TextArea from '../TextArea';
import './style.css';

export default function Form() {
  return (
    <form>
      <div className="containerBoxInput">
        <h4>Sobre o pet</h4>
        <div className="boxInput">
          <label htmlFor="namePet">Nome <span>*</span></label>
          <Input id="namePet" name="namePet" />
        </div>
        <div className="boxInput">
          <label htmlFor="description">Fale um pouco sobre ele/ela</label>
          <TextArea />
        </div>
        <div className="boxInput">
          <label htmlFor="socialpet">O pet possui alguma rede social?</label>
          <Input id="socialpet" name="socialpet" placeholder="Pode deixar em branco caso não" />
        </div>
      </div>
      <div className="containerBoxInput">
        <h4>Sobre o dono</h4>
        <div className="boxInput">
          <label htmlFor="nameOwner">Nome <span>*</span></label>
          <Input id="nameOwner" name="nameOwner" />
        </div>
        <div className="boxInput">
          <label htmlFor="socialOwner">Sua rede social</label>
          <Input id="socialOwner" name="socialOwner" placeholder="Pode deixar em branco caso não tenha" />
        </div>
      </div>
      <div className="buttonInput">
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  )
}