import Button from "../UI/Button";
import dropdown from "../../assets/dropdown.svg";
import { useState } from "react";

type AccountProps = {
  id: string;
  code: string;
  email: string;
  position: string;
  firstName: string;
  lastName: string;
  createdDate: string;
  status: string;
};

type DepartmentItemProps = {
  departmentName: string;
  accounts: AccountProps[];
};

export default function DepartmentItem({
  departmentName,
  accounts,
}: DepartmentItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const filteredAccounts =
    departmentName === "Production"
      ? accounts.filter(
          (account) =>
            account.position === "Production Manager" ||
            account.position === "Production Staff"
        )
      : departmentName === "Inspection"
      ? accounts.filter(
          (account) =>
            account.position === "Inspection Manager" ||
            account.position === "Inspection Staff"
        )
      : departmentName === "Warehouse"
      ? accounts.filter((account) => account.position === "Warehouse Manager")
      : [];

  return (
    <>
      <div className="justify-center flex">
        <Button onClick={handleToggleDropdown}>
          <div className="flex items-center space-x-1">
            <p className="text-2xl text-yellow-400 hover:text-yellow-500">
              {departmentName}
            </p>
            <img
              className="w-5 h-5 rounded-full"
              src={dropdown}
              alt="Dropdown"
            />
          </div>
        </Button>
      </div>
      {isDropdownOpen && (
        <ul>
          {filteredAccounts.map((account) => (
            <li
              className="text-blue-400 hover:text-blue-500 text-center"
              key={account.id}
            >
              <Button to={`/accounts/${account.id}`}>
                {account.firstName} {account.lastName}: {account.position}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
