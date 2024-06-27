import { useEffect, useState } from "react";
import Button from "../UI/Button";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
type MainHeaderProps = {
  checkLogIn: boolean;
  isLogInPage: boolean;
};
export default function MainHeader({
  checkLogIn,
  isLogInPage,
}: MainHeaderProps) {
  const [isLogIn, setIsLogIn] = useState(false);
  const [checkLogInPage, setCheckLogInPage] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLogIn(checkLogIn);
    setCheckLogInPage(isLogInPage);
  }, [checkLogIn, isLogInPage]);
  return (
    <>
      <header
        id="main-header"
        className={checkLogInPage ? "" : "border-b border-b-slate-200"}
      >
        <div className="px-5 py-3 flex items-center  w-auto">
          <Button
            onClick={() => navigate("/", { replace: true })}
            className="text-2xl text-red-500 mr-5"
          >
            RPMS
          </Button>
          {isLogIn && <Navbar />}
        </div>
      </header>
    </>
  );
}
