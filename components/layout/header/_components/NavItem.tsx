import { forwardRef } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type ListItemProps<T extends React.ElementType = "a"> = {
  disabled?: boolean;
  icon?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const ListItem = forwardRef<React.ElementRef<"a">, ListItemProps<"a">>(
  ({ className, disabled, icon, title, children, ...props }, ref) => {
    return (
      <li
        className={cn(
          "w-full bg-transparent",
          disabled && "cursor-not-allowed"
        )}
      >
        <NavigationMenuLink
          asChild
          className={cn(disabled && "pointer-events-none")}
        >
          <a
            ref={ref}
            className={cn(
              "flex gap-2 items-start",
              "px-3 py-4",
              "select-none no-underline outline-none",
              "rounded-sm border border-transparent",
              "bg-gradient-to-br from-transparent to-transparent",
              "transition-all duration-700 ease-in-out",
              "hover:rounded-2xl hover:from-yellow-400/20 hover:to-yellow-600/10",
              "hover:border hover:border-yellow-400/30",
              disabled ? "text-gray-400 opacity-50" : "",
              className
            )}
            {...props}
          >
            {icon && (
              <div
                className={cn(
                  "w-9 h-9",
                  "flex items-center justify-center flex-shrink-0"
                )}
              >
                {icon}
              </div>
            )}
            <div
              className={cn("flex flex-col flex-grow gap-1", "min-h-[4rem]")}
            >
              <h3 className="font-bold leading-tight">{title}</h3>
              <p className="text-xs text-[#F4F4F5] line-clamp-2">{children}</p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
