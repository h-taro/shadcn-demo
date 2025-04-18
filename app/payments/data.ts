type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

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
  ...Array.from({ length: 200 }).map((_, i) => {
    const statuses: Payment["status"][] = ["pending", "processing", "success", "failed"];
    return {
      id: `id_${i}`,
      amount: Math.floor(Math.random() * 451) + 50,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      email: `user${i}@example.com`,
    };
  }),
];
