import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

// components 
import TextArea from '../TextArea';
import Input from '../Input';

import './style.css';


export default function Form() {
  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema)
  });

  function handleNewPet(data){
    console.log(data)

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleNewPet)}>
      <div className="containerBoxInput">
        <h4>Sobre o pet</h4>
        <div className="boxInput">
          <label htmlFor="name">Nome <span>*</span></label>
          <Input id="name" name="name" {...register('name')} />
          <p className="alertError">{errors.name?.message}</p>
        </div>
        <div className="boxInput">
          <label htmlFor="description">Fale um pouco sobre ele/ela</label>
          <TextArea {...register('description')} />
          <p className="alertError">{errors.name?.description}</p>
        </div>
        <div className="boxInput">
          <label htmlFor="socialpet">O pet possui alguma rede social?</label>
          <Input 
            id="socialpet" 
            name="socialpet" 
            {...register('socialpet')}  
            placeholder="Pode deixar em branco caso não" 
          />
          <p className="alertError">{errors.socialpet?.message}</p>
        </div>
      </div>
      <div className="containerBoxInput">
        <h4>Sobre o dono</h4>
        <div className="boxInput">
          <label htmlFor="owner">Nome <span>*</span></label>
          <Input id="owner" name="owner" {...register('owner')} />
          <p className="alertError">{errors.owner?.message}</p>
        </div>
        <div className="boxInput">
          <label htmlFor="socialOwner">Sua rede social</label>
          <Input 
            id="socialOwner" 
            name="socialOwner" 
            {...register('socialOwner')}  
            placeholder="Pode deixar em branco caso não tenha" 
          />
          <p className="alertError">{errors.socialOwner?.message}</p>
        </div>
      </div>
      <div className="buttonInput">
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  )
}