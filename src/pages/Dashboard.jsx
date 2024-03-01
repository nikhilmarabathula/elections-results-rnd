import { useSelector } from "react-redux";

function Dashboard() {
  const selectedAssembly =
    useSelector((state) => state.searchResults.selectedResult) ?? "test";

  return <p>{selectedAssembly}</p>;
}

export default Dashboard;
