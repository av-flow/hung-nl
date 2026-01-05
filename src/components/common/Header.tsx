"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart, Menu, PenSquare, Images, Home, User, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Trang chủ", icon: Home },
  { href: "/blog", label: "Blog", icon: PenSquare },
  { href: "/gallery", label: "Thư viện", icon: Images },
  { href: "/cooperation", label: "Hợp tác", icon: Handshake },
  { href: "/about", label: "Giới thiệu", icon: User },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = (href: string) =>
    cn(
      "transition-colors hover:text-primary",
      pathname === href ? "text-primary font-semibold" : "text-foreground/70"
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        isScrolled
          ? "border-border/40 bg-background/95 backdrop-blur-sm"
          : "bg-background/0"
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BarChart className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            FinanceFlow
          </span>
        </Link>

        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("text-lg font-medium", navLinkClasses(item.href))}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                   <BarChart className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-bold text-primary">
                        FinanceFlow
                    </span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 text-lg font-medium",
                        navLinkClasses(item.href)
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
