import { forwardRef } from 'react';
import './style.css';

const TextArea = forwardRef(({ id, rows, ...field }, ref)=> (
  <textarea
    ref={ref} 
    name="description" 
    id={id} 
    rows={rows}
    {...field} 
  />
));

export default TextArea;