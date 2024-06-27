import MainHeader from "../../components/Navigation/MainHeader";
import Button from "../../components/UI/Button";
import { ACCOUNTS } from "../../data/accounts";
import AccountsList from "../../components/Accounts/AccountsList";
import { useState } from "react";
import AddAccount from "../../components/Accounts/NewAccount";
import Input from "../../components/UI/Input";
export default function Accounts() {
  const [isAdding, setIsAdding] = useState(false);
  function handleStartAdding() {
    setIsAdding(true);
  }
  function handleCancelAdding() {
    setIsAdding(false);
  }
  return (
    <>
      <MainHeader isLogInPage={false} checkLogIn={true} />
      {isAdding && <AddAccount onClose={handleCancelAdding} />}
      <div className="h-full px-5 py-5 space-y-10">
        <div className="flex items-center">
          <h2 className="text-3xl">Manage Accounts</h2>
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
              Add Account +
            </Button>
          </div>
        </div>
        <AccountsList accounts={ACCOUNTS} />
      </div>
    </>
  );
}
