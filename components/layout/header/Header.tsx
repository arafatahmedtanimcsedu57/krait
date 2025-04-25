"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./_components/NavItem";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constant/route-paths";
import { navItems } from "./constants";

const hoverGradientText =
  "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-yellow-500";
const disabledLinkClass = "text-[#ebebe49a] cursor-not-allowed";

export const Header = () => {
  return (
    <nav className="z-50 mt-4 px-4 container mx-auto flex justify-between items-center text-white bg-transparent">
      <div className="flex gap-8 items-center">
        <Link href={ROUTES.HOME} className="flex items-center space-x-2 group">
          <Image
            src="/krait-logo.svg"
            alt="KraitLabs Logo"
            width={100}
            height={80}
            className="h-8 w-auto"
          />
          <p className="text-3xl font-bold logo-shimmer" data-text="Krait">
            Krait
          </p>
        </Link>

        <NavigationMenu className="z-50 hidden md:block" delayDuration={0}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={ROUTES.HOME}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    hoverGradientText,
                    "bg-transparent"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  navigationMenuTriggerStyle(),
                  hoverGradientText,
                  "bg-transparent"
                )}
              >
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-8 grid-cols-1 md:grid-cols-2 !outline-none lg:grid-cols-3 w-[75vh]  rounded-3xl">
                  {navItems.map((item) => (
                    <ListItem
                      key={item.title}
                      disabled={item.disabled}
                      icon={item.icon}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {[
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: ROUTES.ABOUT },
              { label: "Contact", href: ROUTES.CONTACT },
            ].map(({ label, href }) => (
              <NavigationMenuItem key={label} className={disabledLinkClass}>
                <Link href={href} className="pointer-events-none">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      hoverGradientText,
                      "bg-transparent"
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
