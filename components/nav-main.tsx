"use client";

import { useRouter } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import type { LucideIcon } from "lucide-react";

export function NavMain({
  items,
}: {
  items: { label: string; url: string; icon?: LucideIcon }[];
}) {
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton onClick={() => router.push(item.url)}>
              {item.icon && <item.icon />}
              {item.label}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
