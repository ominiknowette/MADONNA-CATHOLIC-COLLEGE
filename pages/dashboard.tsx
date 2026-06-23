import StudentLayout from "../src/component/Product/StudentLayout";
import StudentDashboard from "../src/component/Product/StudentDashboard";

export default function DashboardPage() {
  return (
    <StudentLayout active="Dashboard">
      <StudentDashboard />
    </StudentLayout>
  );
}