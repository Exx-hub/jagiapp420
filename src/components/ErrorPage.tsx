import { Link, useRouteError } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

interface ErrorResponse {
  data: string;
  error: {
    message: string;
    stack: string;
  };
  status: number;
  statusText: string;
  message: string;
}

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.log(error);
  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.error.message || error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="mt-10 flex items-center rounded-md text-xs  p-2 bg-[#333] text-white hover:bg-[#726b7d]"
      >
        <FaArrowLeft />
        <span className="ml-1">Back</span>
      </Link>
    </div>
  );
}

export default ErrorPage;
