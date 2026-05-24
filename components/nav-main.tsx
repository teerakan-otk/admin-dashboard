"use client";

import { useRouter, usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import type { LucideIcon } from "lucide-react";

export function NavMain({
  items,
}: {
  items: { label: string; url: string; icon?: LucideIcon }[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, toggleSidebar } = useSidebar();

  const closeSidebar = () => {
    isMobile && toggleSidebar();
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton
              onClick={() => {
                router.push(item.url);
                closeSidebar();
              }}
              isActive={pathname === item.url}
            >
              {item.icon && <item.icon />}
              {item.label}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
