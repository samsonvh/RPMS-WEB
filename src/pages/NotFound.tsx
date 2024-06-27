import { useRouteError } from "react-router-dom";
import MainHeader from "../components/Navigation/MainHeader";
import Button from "../components/UI/Button";
import home from "../assets/home.svg";
export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <MainHeader isLogInPage={false} checkLogIn={false} />
      <div className="items-center justify-center text-center py-52">
        <h1 className="text-4xl text-red-500 py-2">Oops! Page Not Found</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <br />
        <div className="flex items-center justify-center">
          <Button
            className="text-xl px-4 py-1 rounded-full text-center items-center flex text-white bg-blue-400 hover:bg-blue-500"
            to="/"
          >
            Go Home&nbsp;
            <img className="w-5 h-5 " src={home} />
          </Button>
        </div>
      </div>
    </div>
  );
}
