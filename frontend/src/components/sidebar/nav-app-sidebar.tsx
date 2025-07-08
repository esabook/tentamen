import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { authStore } from "@/store/authStore";
import { NavAccount } from "./nav-account";
import { NavFeature } from "./nav-menu-feature";


export function AppSidebar() {
  const { account } = authStore();
  console.log("AppSidebar");

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <NavAccount account={account} />
      </SidebarHeader>
      <SidebarContent>
        <NavFeature/>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
