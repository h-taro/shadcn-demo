"use client";

import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `商品 ${i + 1}`,
  price: 1000 + i * 10,
}));

export default function StickyDataTable() {
  return (
    <div className="flex flex-col h-[100vh] border rounded-lg overflow-hidden">
      <Table className="w-full">
        <TableHeader className="sticky top-0 z-10 bg-white shadow-sm">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>商品名</TableHead>
            <TableHead className="text-right">価格</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <div className="overflow-y-auto flex-1">
        <Table className="w-full">
          <TableBody className="max-h-[calc(100vh-64px))] overflow-y-auto block">
            {data.map((item) => (
              <TableRow key={item.id} className="table w-full table-fixed">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">
                  ¥{item.price.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 border-t bg-white sticky bottom-0 z-10">
        <div className="flex justify-end gap-2">
          <Button variant={"outline"} size={"sm"}>
            前へ
          </Button>
          <Button variant={"outline"} size={"sm"}>
            次へ
          </Button>
        </div>
      </div>
    </div>
  );
}
