import { AppSidebar } from "@/components/app-sidebar";
import StickyDataTable from "@/components/sticky-data-table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <StickyDataTable />
      </SidebarInset>
    </SidebarProvider>
  );
}
