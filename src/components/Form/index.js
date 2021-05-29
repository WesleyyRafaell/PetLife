import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import firebase from '../../configs/FirebaseConnection';

// components 
import TextArea from '../TextArea';
import Input from '../Input';

import './style.css';


export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleNewPet(data) {
    const { name, description, socialpet, photo, owner, socialOwner } = data;

    const file = photo[0];
    const fileName = photo[0].name;

    try {
      const upload = await firebase.storage().ref(fileName).put(file);
      const urlPhoto = await upload.ref.getDownloadURL();

      firebase.firestore()
        .collection('Pet')
        .add({
          name,
          description,
          socialpet,
          urlPhoto,
          owner,
          socialOwner
        })

    } catch (erro) {
      console.log('erro:', erro)
    }


    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleNewPet)}>
      <div className="containerBoxInput">
        <h4>Sobre o pet</h4>
        <div className="boxInput">
          <label htmlFor="name">Nome <span>*</span></label>
          <Input type="text" id="name" name="name" {...register('name')} />
          <p className="alertError">{errors.name?.message}</p>
        </div>
        <div className="boxInput">
          <label htmlFor="photo">Foto</label>
          <Input type="file" id="photo" name="photo" {...register('photo')} />
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
            type="text"
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
          <Input type="text" id="owner" name="owner" {...register('owner')} />
          <p className="alertError">{errors.owner?.message}</p>
        </div>
        <div className="boxInput">
          <label htmlFor="socialOwner">Sua rede social</label>
          <Input
            type="text"
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