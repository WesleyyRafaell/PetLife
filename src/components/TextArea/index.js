import './style.css';

export default function TextArea({ id, rows }) {
  return(
    <textarea name="description" id={id} rows={rows} />
  )
}