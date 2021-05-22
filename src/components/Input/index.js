import './style.css';

export default function Input({ id, name, placeholder }) {
  return(
    <input type="text" id={id} name={name} placeholder={placeholder} />
  )
}