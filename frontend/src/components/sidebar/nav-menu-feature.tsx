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
import sidebarMenu from '../../store/menuStore';
import { Link, useLocation } from 'react-router-dom';

export function NavFeature() {
  const parentUrl = '/home';
  const { pathname: pathName } = useLocation();

  console.log("NavFeature");
  return (
    <SidebarGroup>
      {sidebarMenu
        .filter((menu) => !menu.hidden)
        .map((menu) => {
           const isHaveChildActive = menu.submenu.some((submenu) => {
             const path = parentUrl + submenu.url;
             return pathName === path;
           });

          return (
            <Collapsible key={menu.title} asChild className="group/collapsible">
              <SidebarMenuItem key={menu.title}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild isActive={isHaveChildActive}>
                    <span>
                      <DynamicIcon name={menu.icon} />
                      <span className='group-data-[collapsible=icon]:hidden'>{menu.title}</span>
                      <DynamicIcon
                        name="chevron-down"
                        className="ml-auto transition-transform group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-180"
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
                              <SidebarMenuButton asChild isActive={isActive}>
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
