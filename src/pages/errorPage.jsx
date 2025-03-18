import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
  const error = useRouteError()

  return(
    <div className="flex  justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Opps ! ! !</h1>
      <p className="my-12 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-red-500 text-5xl font-bold">URL {error.statusText || error.message} !</p>
      <Link to ="/nasi-udukBUde" className="font-bold mt-10 underline text-3xl"> Back Home</Link>
    </div>
  )
  
}

export default ErrorPage