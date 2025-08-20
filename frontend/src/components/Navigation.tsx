import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/maintenance', label: 'Maintenance' },
  { to: '/verify-mfa', label: 'Verify MFA' },
  { to: '/unauthorized', label: 'Unauthorized' },
];

export function Navigation() {
  const location = useLocation();
  return (
    <nav className="w-full border-b bg-white/95 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={clsx(navigationMenuTriggerStyle(), 'p-0 bg-transparent hover:bg-slate-100')}> 
                <Link to="/" aria-label="Home" className="flex items-center gap-2">
                  <img src="/branding/assets/logo-0.png" className="h-8 w-8 mr-2" />
                  <span className="text-xl font-bold tracking-tight text-blue-800" style={{ fontFamily: 'Nunito, sans-serif' }}>MedLock</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.slice(1).map(link => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink asChild className={clsx(navigationMenuTriggerStyle(), {
                  '!bg-blue-100 text-blue-700': location.pathname === link.to,
                })}>
                  <Link to={link.to}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Button asChild id="login-button" variant="outline" className="font-semibold">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild id="signup-button" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
}
