import { useState } from "react";
import DepartmentsList from "../components/Departments/DepartmentsList";
import MainHeader from "../components/Navigation/MainHeader";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { DEPARTMENTS } from "../data/departments";
import AddDepartment from "../components/Departments/NewDepartment";

export default function Departments() {
  const [isAdding, setIsAdding] = useState(false);
  function handleStartAdding() {
    setIsAdding(true);
  }
  function handleCancelAdding() {
    setIsAdding(false);
  }
  return (
    <main>
      <header>
        <MainHeader isLogInPage={false} checkLogIn={true} />
        {isAdding && <AddDepartment onClose={handleCancelAdding} />}
        <div className="h-full px-5 py-5 space-y-10">
          <div className="flex items-center">
            <h2 className="text-3xl">Manage Departments</h2>
            <div className="ml-auto flex items-center space-x-10">
              <Input
                label=""
                id="search"
                name="Search box"
                className="px-2 py-1 w-80"
                type="text"
                placeholder="Search"
              />
              <Button
                onClick={handleStartAdding}
                className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Department +
              </Button>
            </div>
          </div>
          <DepartmentsList departments={DEPARTMENTS} />
        </div>
      </header>
    </main>
  );
}
