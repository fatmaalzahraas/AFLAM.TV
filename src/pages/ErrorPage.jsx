import { useRouteError, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="text-lightColor flex flex-col justify-center items-center h-screen">
      <h1 className="text-darkBlue text-[1.4rem] font-semibold mb-1">Oops!</h1>
      <p className="text-darkBlue text-[1.3rem] font-semibold mb-1">
        Sorry, an unexPected error has occurred.
      </p>
      <p className="text-darkBlue text-[1.3rem] font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="px-3 py-1 bg-lightBlue text-[0.9rem] font-semibold rounded mt-2"
      >
        Back to home
      </button>
    </div>
  );
};
export default ErrorPage;
