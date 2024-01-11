import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {data} from '../assets/data.json'
import {FaHashtag ,FaEdit,FaTrashRestoreAlt} from 'react-icons/fa'
import Name from "./Name";
import Status from "./Status";

const columns = [
  {
    Header: <FaHashtag/>,
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
     <Name name={value}  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wYxtskCSIFmnVqBVzIdmW-yme0aAYnbNKDGWGXir3g&s"}/>
    )
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <Status status={value}/>
     )
  },
  {
    Header: "Actions",
    accessor: "action",
    Cell: ({ cell: { value } }) => {
      if(value){
         return(<div className="flex items-center gap-2"><FaEdit className="text-green-800"/> <FaTrashRestoreAlt  className="text-red-800"/></div>)
      }
    }
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
    <div className="relative  overflow-x-scroll py-12 flex flex-col  w-full text-[9px] sm:overflow-x-auto sm:text-xs">
      <table {...getTableProps()} className="min-w-fit  text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-inherit text-gray-700 uppercase dark:text-gray-400 w-fit">
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column,id) =>{
                if(id%2==0){
                     return(
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 bg-gray-80 ">
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
                       
                      </th>
                    )
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row,id) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()} className="border-b border-gray-200 w-fit ">
                {row.cells.map((cell,id) => {
                  if(id%2==0){
                    return(  <td {...cell.getCellProps()} className="px-6 py-4 font-medium  bg-gray-80 ">{cell.render("Cell")}</td>)
                  }
                  else{
                    return (  <td {...cell.getCellProps()} className="px-6 py-4 font-medium bg-gray-50 dark:bg-gray-80">{cell.render("Cell")}</td>)
                  }
                })}
              </tr>
            );
          })}
        </tbody>
       
      </table>
      <div className="w-6/12 flex    px-3  text-gray-500 text-inherit">
        <div className="flex gap-3">
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Prev
        </button>

        <span className="flex  ">
          {pageCount>=pageIndex+1 && <button className="hover:bg-[#00ABF6] hover:text-white px-3 py-2"    onClick={() => gotoPage(pageIndex)}>{pageIndex + 1}</button>}
          {pageCount>=pageIndex+2 && <button className="hover:bg-[#00ABF6] hover:text-white px-3 py-2" onClick={() => gotoPage(pageIndex+1)}>{pageIndex +2}</button>}
          {pageCount>=pageIndex+3 && <button className="hover:bg-[#00ABF6] hover:text-white px-3 py-2" onClick={() => gotoPage(pageIndex+2)}>{pageIndex + 3}</button>}
          {pageCount>=pageIndex+4 && <button className="hover:bg-[#00ABF6] hover:text-white px-3 py-2" onClick={() => gotoPage(pageIndex+3)}>{pageIndex + 4}</button>}
          {pageCount>=pageIndex+5 && <button className="hover:bg-[#00ABF6] hover:text-white px-3 py-2" onClick={() => gotoPage(pageIndex+4)}>{pageIndex + 5}</button>}
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