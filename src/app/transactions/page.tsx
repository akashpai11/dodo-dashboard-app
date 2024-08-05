/* eslint-disable @next/next/no-img-element */

"use client";

import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

type Payment = {
  name: string;
  lastOrder: string;
  method: string;
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Order
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

const Transactions = (props: Props) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/transactions")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2 p-8">
      <p className="text-sm text-dodoText dark:text-gray-400">Transactions</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Transactions;
