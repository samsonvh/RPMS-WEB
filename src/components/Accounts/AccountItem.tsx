import Button from "../UI/Button";
import editAccount from "../../assets/edit-profile.svg";
import banAccount from "../../assets/user-ban.svg";
import { useState } from "react";
import PositionChange from "./PositionChange";
import StatusChange from "./StatusChange";
type AccountItemProps = {
  id: string;
  code: string;
  email: string;
  position: string;
  firstName: string;
  lastName: string;
  createdDate: string;
  status: string;
};

export default function AccountItem({
  id,
  code,
  createdDate,
  email,
  firstName,
  lastName,
  position,
  status,
}: AccountItemProps) {
  const [isChangeRole, SetIsChangeRole] = useState(false);
  const [isChangeStatus, SetIsChangeStatus] = useState(false);
  function handleStartChanging() {
    SetIsChangeRole(true);
  }
  function handleCancelChanging() {
    SetIsChangeRole(false);
  }
  function handleStartChangingStatus() {
    SetIsChangeStatus(true);
  }
  function handleCancelChangingStatus() {
    SetIsChangeStatus(false);
  }
  return (
    <>
      {isChangeRole && (
        <PositionChange
          position={position}
          firstName={firstName}
          lastName={lastName}
          onClose={handleCancelChanging}
        />
      )}
      {isChangeStatus && (
        <StatusChange
          status={status}
          firstName={firstName}
          lastName={lastName}
          onClose={handleCancelChangingStatus}
        />
      )}
      <td>{code}</td>
      <td>
        <Button className="text-blue-500 hover:text-blue-700" to={id}>
          {firstName} {lastName}
        </Button>
      </td>
      <td>{position}</td>
      <td>{email}</td>
      <td>{createdDate}</td>
      {status === "Active" ? (
        <td className="text-green-500">{status}</td>
      ) : (
        <td className="text-yellow-500">{status}</td>
      )}
      <td className="w-20 pr-2 space-x-1">
        <Button
          onClick={handleStartChanging}
          title="Change Role"
          className="border bg-white hover:bg-amber-100 rounded-full p-1"
        >
          <img className="w-5 h-5" src={editAccount} />
        </Button>
        <Button
          onClick={handleStartChangingStatus}
          title="Ban/Unban Account"
          className="border bg-white hover:bg-amber-100 rounded-full p-1"
        >
          <img className="w-5 h-5" src={banAccount} />
        </Button>
      </td>
    </>
  );
}
