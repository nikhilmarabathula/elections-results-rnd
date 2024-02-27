import DashboardTable from "../features/dashboard/DashboardTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Results</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <DashboardTable />
      </Row>
    </>
  );
}

export default Dashboard;
