import {ReactNode} from "react";
import {cookies} from "next/headers";

import {AppSidebar} from "@/app/(main)/dashboard/_components/sidebar/app-sidebar";
import {Separator} from "@/components/ui/separator";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {users} from "@/data/users";
import {getSidebarVariant, getSidebarCollapsible} from "@/lib/layout-preferences";
import {cn} from "@/lib/utils";

import AccountSwitcher from "./_components/sidebar/account-switcher";
import LayoutControls from "./_components/sidebar/layout-controls";
import ThemeSwitcher from "./_components/sidebar/theme-switcher";
import ResetLayoutButton from "./_components/sidebar/reset-layout-button";
import {GridLayoutProvider} from "@/contexts/grid-layout-context";

export default async function Layout({children}: Readonly<{ children: ReactNode }>) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    const sidebarVariant = await getSidebarVariant();
    const sidebarCollapsible = await getSidebarCollapsible();

    return (
        <GridLayoutProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar variant={sidebarVariant} collapsible={sidebarCollapsible}/>
                <SidebarInset>
                    <header
                        className={cn(
                            "flex shrink-0 items-center gap-2 transition-[width,height] ease-linear z-10",
                            (sidebarVariant === "sidebar" && "group-has-data-[collapsible=icon]/sidebar-wrapper:h-12") ? "p-0" : "px-2 py-4"
                        )}
                    >
                        <div
                            className={cn(
                                "flex w-full items-center justify-between p-2 bg-sidebar/50 backdrop-blur-[8px]",
                                sidebarVariant === "inset" && "bg-card rounded-lg border-none shadow-lg",
                                sidebarVariant === "sidebar" && "border border-sidebar-border shadow-sm",
                                sidebarVariant === "floating" && "rounded-lg border border-sidebar-border shadow-sm md:peer-data-[variant=floating]:rounded-lg",
                                sidebarCollapsible === "icon" && "px-4 py-2"
                            )}
                        >
                            <div className="flex items-center gap-1 lg:gap-2">
                                <SidebarTrigger className="-ml-1"/>
                                <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4"/>
                                <h1 className="text-base font-medium">Documents</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <ResetLayoutButton/>
                                <LayoutControls variant={sidebarVariant} collapsible={sidebarCollapsible}/>
                                <ThemeSwitcher/>
                                <AccountSwitcher users={users}/>
                            </div>
                        </div>
                    </header>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </GridLayoutProvider>
    );
}