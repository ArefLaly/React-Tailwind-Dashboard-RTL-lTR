import { SortableTable } from "./SortableTable";
import { TransactionsTable } from "./TransactionsTable";

const Tables = () => {
  return (
    <div className="flex flex-col gap-4 px-1">
      <SortableTable />
      <TransactionsTable />
    </div>
  );
};
export default Tables;
