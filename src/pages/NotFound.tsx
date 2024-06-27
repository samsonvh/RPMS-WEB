import { useRouteError } from "react-router-dom";
import MainHeader from "../components/Navigation/MainHeader";
import Button from "../components/UI/Button";

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
        <Button to="/">Go Home</Button>
      </div>
    </div>
  );
}
