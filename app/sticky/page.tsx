import AmazonSalesTable from "@/components/amazon-sales-table";

export default function Page() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-zinc-100">
          Amazon Sales Analysis
        </h1>
        <p className="text-zinc-400">
          Track your Amazon sales performance and profitability
        </p>
      </div>
      <AmazonSalesTable />
    </main>
  );
}
