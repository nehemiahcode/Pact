"use client";
import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Datas from "./MyData.json";

export default function Table() {
  const data = useMemo(() => Datas, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "First name",
      accessorKey: "first_name",
      footer: "First name",
    },
    {
      header: "Last name",
      accessorKey: "last_name",
      footer: "Last name",
    },
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
    },
  ];
  const tables = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <h1 className=" font-Poppins font-semibold text-4xl text-center">
        Basic Table
      </h1>
    <div className=" w-[80%] h-[400px] mx-auto">
    <div>
    <div className=" overflow-x-auto overflow-y-scroll">
     <table className=" w-[100%] overflow-x-scroll border-[1px]">
        <thead>
          {tables.getHeaderGroups().map((headergroup) => (
            <tr key={headergroup.id}>
              {headergroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" text-lg font-semibold font-Poppins"
                >
                  {flexRender(
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
            <tr key={row.id} className=" border-[2px] hover:bg-slate-600 ">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="  py-3 px-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
    </div>
    </div>
    </>
  );
}
