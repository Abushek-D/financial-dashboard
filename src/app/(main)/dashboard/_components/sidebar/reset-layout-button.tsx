"use client";

import { IconRefresh } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useGridLayout } from "@/contexts/grid-layout-context";

export default function ResetLayoutButton() {
    const pathname = usePathname();
    const { resetLayout } = useGridLayout();

    // Показывать кнопку только на страницах с grid layout
    const isGridPage = pathname.startsWith("/dashboard/test_");

    if (!isGridPage) {
        return null;
    }

    return (
        <Button size="icon" onClick={resetLayout}>
            <IconRefresh />
        </Button>
    );
}