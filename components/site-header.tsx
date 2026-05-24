"use client";

import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";

export function SiteHeader() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs =
    segments.length > 0
      ? segments.map((segment) =>
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase()),
        )
      : ["Dashboard"];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />

      <Separator orientation="vertical" className="mr-2 my-5" />

      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator />}

              <BreadcrumbItem>
                <BreadcrumbPage>{crumb}</BreadcrumbPage>
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <ModeToggle className="ml-auto" />
    </header>
  );
}
