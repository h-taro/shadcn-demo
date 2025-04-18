import { Payment } from "./columns";

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  ...Array.from({ length: 2000 }).map((_, i) => ({
    id: `auto-${i + 1}`,
    amount: Math.floor(Math.random() * 1000),
    status: ["pending", "processing", "success", "failed"][i % 4] as Payment["status"],
    email: `user${i + 1}@example.com`,
  })),
];