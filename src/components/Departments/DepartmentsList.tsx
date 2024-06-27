import DepartmentItem from "./DepartmentItem";
import { ACCOUNTS } from "../../data/accounts";

type DepartmentsListProps = {
  departments: {
    id: string;
    departmentName: string;
  }[];
};

export default function DepartmentsList({ departments }: DepartmentsListProps) {
  return (
    <>
      <ul className="flex">
        {departments.map((department) => (
          <li className="flex-1" key={department.id}>
            <DepartmentItem
              departmentName={department.departmentName}
              accounts={ACCOUNTS}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
