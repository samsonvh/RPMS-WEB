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
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
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
