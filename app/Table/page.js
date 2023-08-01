"use client";
import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";
import Datas from "../Components/MyData.json";
import Ripples from "react-ripples";
// import {DateTime} from "luxon"

export default function Table() {
  const data = useMemo(() => Datas, []);
  const [filtering, setFiltering] = useState('')

  const columns = [
    {
      header: "S/N",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      columns: [
        {
          header: "First ",
          accessorKey: "first_name",
          footer: "First name",
        },
        {
          header: "Last",
          accessorKey: "last_name",
          footer: "Last name",
        },
      ],
    },
    // {
    //   header:"Name",
    //   accessorFn:row =>`${row.first_name} ${row.last_name}`

    // },
    // {
    //   header: "First name",
    //   accessorKey: "first_name",
    //   footer: "First name",
    // },
    // {
    //   header: "Last name",
    //   accessorKey: "last_name",
    //   footer: "Last name",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "genders",
      footer: "Genders",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
      // cell:info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
    },
  ];
  const tables = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    state:{
     globalFilter:filtering     
    },
    onGlobalFilterChange:setFiltering
  });
  return (
    <>
      <h1 className=" font-Poppins font-semibold text-4xl text-center">
        Basic Table
      </h1>

      <Ripples>
        <button className=" bg-sky-500 py-3 px-3 rounded text-white font-Poppins font-medium">
          Ripple Button
        </button>
      </Ripples>
      <input type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)}/>
      <div className=" w-[100%] h-[400px] w3-container mx-auto">
        <div className=" w-[100%]">
          <div className=" overflow-x-auto overflow-y-scroll  w-[100%]">
            <table className=" w3-table-all w-[100%] overflow-x-scroll border-[1px]">
              <thead className=" w-[100%] ">
                {tables.getHeaderGroups().map((headergroup) => (
                  <tr key={headergroup.id}>
                    {headergroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className=" text-lg text-left font-semibold font-Poppins"
                      >
                        { header.isPlaceholder ?  null : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {tables.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className=" border-[2px] hover:bg-slate-600 "
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="  py-3 ">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>title</td>
                </tr>
              </tfoot>
            </table>
          </div>
       <div className=" flex ite gap-5">
       <Ripples>
        <button onClick={() => tables.setPageIndex(0)} className={` ${tables.getCanPreviousPage() ? "bg-sky-500" : "bg-red-500"} rounded-lg px-5 py-2 text-white font-Poppins`}>1</button>
        </Ripples>
        <Ripples>
        <button disabled={!tables.getCanNextPage()} onClick={() => tables.nextPage()} className={`rounded-lg ${!tables.getCanNextPage() && "bg-red-500"} px-5 py-2 bg-sky-500 text-white font-Poppins`}>2</button>
        </Ripples>
        {/* <Ripples>
        <button onClick={() => tables.setPageIndex(tables.getPageCount -1) } className=" rounded-lg px-5 py-2 bg-sky-500 text-white font-Poppins">3</button>
        </Ripples> */}
          
       </div>
        </div>
       
      </div>
    </>
  );
}
