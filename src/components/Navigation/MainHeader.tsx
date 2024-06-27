import { useEffect, useState } from "react";
import Button from "../UI/Button";
import Navbar from "./Navbar";
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
          <Button to="/" className="text-2xl text-red-500 mr-5">
            RPMS
          </Button>
          {isLogIn && <Navbar />}
        </div>
      </header>
    </>
  );
}
