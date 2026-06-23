import StudentLayout from "../src/component/Product/StudentLayout";
import ResultTable from "../src/component/Product/ResultTable";

export default function ResultsPage() {
  return (
    <StudentLayout active="Results">
      <ResultTable />
    </StudentLayout>
  );
}