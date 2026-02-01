"use client";

import { ChevronRight, User } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface INavItems {
  title: string;
  icon: JSX.Element;
  isActive: boolean;
  items: INavItem[];
  url?: string
}

interface INavItem {
  title: string;
  url: string;
  icon: JSX.Element;
}

type NavMainProps = {
  adminNavItems: INavItems[];
  userNavItems: INavItems[];
  userInfo: any | null;
};

export function NavMain({
  adminNavItems,
  userNavItems,
  userInfo,
}: NavMainProps) {
  const pathName = usePathname();
  let navItems: INavItems[] | null = null;

  if (userInfo?.role === "ADMIN") {
    navItems = adminNavItems;
  } else if (userInfo?.role === "USER") {
    navItems = userNavItems;
  } else {
    navItems = [];
  }

  navItems = userNavItems

  return (
    <SidebarGroup className="mt-5">
      <SidebarMenu>
        {navItems &&
          navItems.length > 0 &&
          navItems.map((item) => {
            console.log(item);
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className={`group/collapsible mb-3`}
              >
                <SidebarMenuItem className={``}>
                  {item?.items?.length > 0 ?

                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        item={item}
                        className={`cursor-pointer font-medium text-gray-700 text-md py-6 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-100 ease-in ${item?.isActive && 'bg-gradient-to-r from-primary to-secondary text-white hover:text-white'}`}
                        tooltip={item.title}
                      >
                        <span>{item?.icon}</span>
                        <span className="text-lg font-bold">{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    :

                    <Link href={item?.url ? item?.url : ''}>
                      <SidebarMenuButton
                        item={item}
                        className={`cursor-pointer font-medium text-gray-700 text-md py-6 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-100 ease-in ${item?.isActive && 'bg-gradient-to-r from-primary to-secondary text-white hover:text-white'}`}
                        tooltip={item.title}
                      >
                        <span>{item?.icon}</span>
                        <span className="text-lg font-bold">{item.title}</span>
                      </SidebarMenuButton>
                    </Link>


                  }




                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem
                          id="sidebarMenuSubItem"
                          key={subItem.title}
                        >
                          <SidebarMenuSubButton asChild>
                            <Link
                              className={`${subItem.url === pathName && "bg-gray-300"
                                } rounded-md py-5 px-3 font-medium`}
                              href={subItem.url}
                            >
                              <span className="font-medium text-lg text-gray-700">{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
      </SidebarMenu>
    </SidebarGroup>
  );
}