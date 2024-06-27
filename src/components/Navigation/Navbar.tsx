import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import signOut from "../../assets/logout.svg";
export default function Navbar() {
  return (
    <>
      <nav
        id="navbar-header"
        className="flex justify-between items-center px-5 py-2"
      >
        <ul className="flex space-x-5">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/accounts"
              end
            >
              Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/departments"
            >
              Departments
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button
        className="border bg-slate-200 border-slate-300 hover:bg-slate-300 hover:text-black rounded-md items-center ml-auto text-gray-500"
        to="/"
      >
        <img className="w-8 h-8" title="Sign Out" src={signOut} />
      </Button>
    </>
  );
}
