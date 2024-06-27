import AccountItem from "./AccountItem";

type AccountsListProps = {
  accounts: {
    id: string;
    code: string;
    email: string;
    position: string;
    firstName: string;
    lastName: string;
    createdDate: string;
    status: string;
  }[];
};
export default function AccountsList({ accounts }: AccountsListProps) {
  return (
    <table id="table" className="w-full">
      <thead>
        <tr>
          <th>Code</th>
          <th>Full Name</th>
          <th>Job Position</th>
          <th>Email</th>
          <th>Created Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr className="hover:bg-slate-200" key={account.id}>
            <AccountItem {...account} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
