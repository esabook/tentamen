import {
  SidebarGroup,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible';
import { DynamicIcon } from 'lucide-react/dynamic';
import sidebarMenu from '../../store/menuStore.jsx';
import { Link } from 'react-router-dom';

export function NavFeature() {
  const parentUrl = '/home';
  const pathName = window.location.pathname;

  return (
    <SidebarGroup>
      {sidebarMenu
        .filter((menu) => !menu.hidden)
        .map((menu) => {
          return (
            <Collapsible key={menu.title} className="group/collapsible">
              <SidebarMenuItem key={menu.title}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild>
                    <span>
                      <DynamicIcon name={menu.icon} />
                      {menu.title}
                      <DynamicIcon
                        name="chevron-down"
                        className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                      />
                    </span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menu.submenu &&
                      menu.submenu
                        .filter((submenu) => !submenu.hidden)
                        .map((submenu) => {
                          const path = parentUrl + submenu.url;
                          const isActive = pathName === path;
                          return (
                            <SidebarMenuItem key={submenu.title}>
                              <SidebarMenuButton isActive={isActive}>
                                <Link to={path}>{submenu.title}</Link>
                              </SidebarMenuButton>
                              <SidebarMenuBadge>{submenu.badge_text}</SidebarMenuBadge>
                            </SidebarMenuItem>
                          );
                        })}

                    <SidebarMenuSubItem />
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
    </SidebarGroup>
  );
}
