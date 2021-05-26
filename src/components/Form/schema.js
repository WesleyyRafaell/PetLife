import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('O nome do pet é obrigatório'),
  description: yup.string(),
  socialpet: yup.string(),
  owner: yup.string().required('O nome do responsável pelo pet é obrigatório'),
  socialOwner: yup.string()
})