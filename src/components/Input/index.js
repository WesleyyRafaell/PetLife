import { forwardRef } from 'react';
import './style.css';

const Input = forwardRef(({ type, id, name, placeholder, ...field }, ref) => (
  <input
   ref={ref}
   type={type} 
   id={id} 
   name={name} 
   placeholder={placeholder} 
   {...field} 
  />
))

export default Input;