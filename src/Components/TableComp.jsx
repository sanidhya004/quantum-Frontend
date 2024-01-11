import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {data} from '../assets/data.json'

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];

const TableComp = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3">
      <table {...getTableProps()} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column,id) =>{
                if(id%2==0){
                     return(
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 bg-gray-80">
                        {column.render("Header")}
                        {column.isSorted && (
                          <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                        )}
                      </th>
                     )
                }
                else{
                    return(
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 bg-gray-50 dark:bg-gray-80">
                        {column.render("Header")}
                        {column.isSorted && (
                          <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                        )}
                      </th>
                    )
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()} className="border-b border-gray-200 ">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4 font-medium ">{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
       
      </table>
      <div className="w-full flex bg-green-900 w-[90%]">
        <div>
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Prev
        </button>

        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
        </div>
     
      </div>
    </div>
  );
};

export default TableComp;