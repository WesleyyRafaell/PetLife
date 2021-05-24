import Loader from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <Loader
      type="Puff"
      color="#E6567A"
      height={60}
      width={60}
    // timeout={3000} 
    />
  )
}