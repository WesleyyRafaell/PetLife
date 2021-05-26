import { forwardRef } from 'react';
import './style.css';

const Input = forwardRef(({ id, name, placeholder, ...field }, ref) => (
  <input
   ref={ref}
   type="text" 
   id={id} 
   name={name} 
   placeholder={placeholder} 
   {...field} 
  />
))

export default Input;