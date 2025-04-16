"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { generateSalesData } from "@/lib/generate-data";
import type { SalesData } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function StickyDataTable() {
  const data = React.useMemo(() => generateSalesData(50), []);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [isHeaderFixed, setIsHeaderFixed] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!tableContainerRef.current) return;

      const tableRect = tableContainerRef.current.getBoundingClientRect();
      if (tableRect.top <= 0 && !isHeaderFixed) {
        setIsHeaderFixed(true);
      } else if (tableRect.top > 0 && isHeaderFixed) {
        setIsHeaderFixed(false);
      }
    };

    const handleResize = () => {
      if (isHeaderFixed) {
        setIsHeaderFixed(false);
        setTimeout(() => setIsHeaderFixed(true), 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isHeaderFixed]);

  const columns: ColumnDef<SalesData>[] = [
    {
      accessorKey: "productId",
      header: "Product ID",
      cell: ({ row }) => (
        <div className="font-mono text-xs">{row.getValue("productId")}</div>
      ),
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="w-full p-6 bg-zinc-900 rounded-lg shadow-xl">
      <div className="flex items-center justify-between py-4">
        <Input placeholder="Filter products..." />
      </div>

      <div
        ref={tableContainerRef}
        className="relative rounded-md border border-zinc-700 bg-zinc-900 shadow-md"
      >
        {isHeaderFixed && (
          <div
            className="fixed top-0 z-50 shadow-md"
            style={{
              width: tableContainerRef.current?.offsetWidth,
              left: tableContainerRef.current?.getBoundingClientRect().left,
            }}
          >
            <div className="rounded-t-md border border-zinc-700 bg-zinc-900 overflow-hidden">
              <Table className="w-full table-fixed">
                <TableHeader className="bg-zinc-900">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      key={headerGroup.id}
                      className="border-b border-zinc-800"
                    >
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className={`bg-zinc-900 text-zinc-300 py-4 font-medium h-12 px-4 text-left align-middle border-r border-zinc-800`}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
              </Table>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <Table className="w-full table-fixed">
            <TableHeader className="bg-zinc-900 shadow-sm">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b border-zinc-800"
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={`bg-zinc-900 text-zinc-300 py-4 font-medium h-12 px-4 text-left align-middle border-r border-zinc-800`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-r border-zinc-800 hover:bg-zinc-800/50 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={`p-4 align-middle text-zinc-200 border-r border-zinc-800`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-zinc-400"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end p-4 border-t border-zinc-800 bg-zinc-900">
          <div className="text-sm text-zinc-400">
            Showing {table.getFilteredRowModel().rows.length} of {data.length}{" "}
            rows
          </div>
        </div>
      </div>
    </div>
  );
}
