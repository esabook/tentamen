import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { ToggleTheme } from './toggle-theme';
import { ToggleLanguage } from './toggle-lang';
import TopNavBarClock from './nav-topbar-clock';

export default function NavTopBar() {
  console.log('NavTopBar');
  return (
    <header className="flex h-14 shrink-0 items-center gap-2">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />

        <div className="ml-auto px-3">
          <div className="flex items-center gap-2 text-sm">
            <TopNavBarClock />
            <ToggleTheme />
            <ToggleLanguage />
          </div>
        </div>
      </div>
    </header>
  );
}
