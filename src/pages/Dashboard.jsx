import styled from "styled-components";
import DashboardTable from "../features/dashboard/DashboardTable";
import FiltersLayout from "../ui/FiltersLayout";
import React from "react";

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  /* background-color: orange; */
  padding: 2rem;
  padding-bottom: 5rem;
  /* opacity: 0.1; */
`;

function Dashboard() {
  const columns = React.useMemo(
    () => [
      {
        Header: "District",
        accessor: "district",
      },
      {
        Header: "Assemblies",
        accessor: "assemblies",
      },
      {
        Header: "General Seats",
        accessor: "generalSeats",
      },
      {
        Header: "SC Seats",
        accessor: "scSeats",
      },
      {
        Header: "ST Seats",
        accessor: "stSeats",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        district: "Guntur",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Krishna",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "East Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "West Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Visakhapatnam",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Guntur",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Krishna",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "East Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "West Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Visakhapatnam",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Guntur",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Krishna",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "East Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "West Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Visakhapatnam",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Guntur",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Krishna",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "East Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "West Godavari",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
      {
        district: "Visakhapatnam",
        assemblies: 7,
        generalSeats: 5,
        scSeats: 1,
        stSeats: 1,
      },
    ],
    []
  );

  return (
    <StyledMain>
      {
        // <DashboardTable data={data} columns={columns} />
        // <FiltersLayout />
      }
    </StyledMain>
  );
}

export default Dashboard;
