import { useNavigate, useParams } from "react-router-dom";
import { ACCOUNTS } from "../../data/accounts";
import MainHeader from "../../components/Navigation/MainHeader";
import Button from "../../components/UI/Button";
import backIcon from "../../assets/back.svg";
export default function Account() {
  const params = useParams<{ id: string }>();

  const accountId = params.id;
  const loadedAccount = ACCOUNTS.find((account) => account.id === accountId);
  const navigate = useNavigate();
  if (!loadedAccount) {
    return (
      <main id="account-page">
        <p>No account found!</p>
      </main>
    );
  }
  return (
    <>
      <MainHeader checkLogIn={true} isLogInPage={false} />
      <article className="border rounded-md h-full mt-24 px-5 mx-80 py-5 space-y-8">
        <div className="flex items-center border-b pb-2">
          <div className="flex items-center space-x-5">
            <div className="flex items-center">
              <h2 className="text-3xl">General Info of&nbsp;</h2>
              <h2 className="text-3xl text-yellow-300">
                {loadedAccount.firstName} {loadedAccount.lastName}
              </h2>
            </div>
            <p className="rounded-md bg-blue-500 text-white px-2 text-sm">
              {loadedAccount.position}
            </p>
          </div>

          <Button
            className="rounded-md border bg-slate-200 border-slate-300 hover:bg-slate-300 px-1 py-1 ml-auto flex items-center"
            onClick={() => navigate(-1)}
          >
            <img className="w-5 h-5" title="Go Back" src={backIcon} />
          </Button>
        </div>
        <ul className="space-y-3">
          <li>First name: {loadedAccount.firstName}</li>
          <li>Last name: {loadedAccount.lastName}</li>
          <li>Personal email: {loadedAccount.email}</li>
          <li>Working status: {loadedAccount.status}</li>
        </ul>
      </article>
    </>
  );
}
