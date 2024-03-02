import { useTable } from "react-table";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 80%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 5px;
  } */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledTh = styled.th`
  padding: 16px;
  text-align: left;
  background-color: #f0f0f0;
  border-bottom: 2px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const StyledTableBody = styled.tbody``;

const DashboardTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TableContainer>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <StyledTh {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </StyledTh>
              ))}
            </tr>
          ))}
        </thead>
        <StyledTableBody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <StyledTd {...cell.getCellProps()} key={cellIndex}>
                      {cell.render("Cell")}
                    </StyledTd>
                  );
                })}
              </tr>
            );
          })}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default DashboardTable;
