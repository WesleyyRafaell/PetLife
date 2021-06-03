import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import firebase from '../../configs/FirebaseConnection';
import { useHistory } from 'react-router-dom';

// components 
import TextArea from '../TextArea';
import Input from '../Input';

import './style.css';


export default function Form() {
  const history = useHistory();

  const [file, setFile] = useState(null);
  const [nameFile, setNameFile] = useState('');

  const [previewPhotoPet, setPreviewPhotoPet] = useState('https://media.discordapp.net/attachments/828588250754056202/848927106908946482/pet.png');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleNewPet(data) {
    const { name, description, socialpet, owner, socialOwner } = data;

    // const file = photo[0];
    // const fileName = photo[0].name;

    let urlPhoto = '';

    try {

      if(file !== null){
        const upload = await firebase.storage().ref(nameFile).put(file);
        const url = await upload.ref.getDownloadURL();
        urlPhoto = url;
      }

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
    history.push('/');
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
    setNameFile(event.target.files[0].name);

    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        setPreviewPhotoPet(reader.result)
      }
    }

    reader.readAsDataURL(event.target.files[0])
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
          <label>Uma foto do seu pet</label>
          <div className="containerInputFile">
            <label htmlFor="photo" id="labelFile">Carregar foto</label>
            <img src={previewPhotoPet} alt="" />
            {/* <Input  /> */}
            <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange}  />
          </div>
        </div>
        <div className="boxInput">
          <label htmlFor="description">Fale um pouco sobre ele/ela</label>
          <TextArea {...register('description')} />
          <p className="alertError">{errors.name?.description}</p>
        </div>
        <div className="boxInput">
          <label htmlFor="socialpet">Insta do pet</label>
          <Input
            id="socialpet"
            type="text"
            name="socialpet"
            {...register('socialpet')}
            placeholder="Se não tiver, deixe em branco"
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
          <label htmlFor="socialOwner">Seu insta</label>
          <Input
            type="text"
            id="socialOwner"
            name="socialOwner"
            {...register('socialOwner')}
            placeholder="Se não tiver, deixe em branco"
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