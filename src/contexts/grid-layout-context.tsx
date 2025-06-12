"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

// Типы для layouts
type LayoutItem = {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    minH?: number;
};

type Layouts = {
    lg: LayoutItem[];
    md: LayoutItem[];
    sm: LayoutItem[];
    xs: LayoutItem[];
};

type GridLayoutContextType = {
    layouts: Layouts;
    setLayouts: (layouts: Layouts) => void;
    resetLayout: () => void;
};

const GridLayoutContext = createContext<GridLayoutContextType | undefined>(undefined);

// Оптимизированные layouts для полноэкранного режима
const defaultLayouts: Record<string, Layouts> = {
    "/dashboard/test_1": {
        lg: [
            { i: "total-balance", x: 0, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "new-clients", x: 3, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "active-operations", x: 6, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "growth-rate", x: 9, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "chart-placeholder", x: 0, y: 4, w: 12, h: 6, minW: 6, minH: 4 },
            { i: "chart-placeholder-2", x: 0, y: 10, w: 12, h: 6, minW: 6, minH: 4 },
        ],
        md: [
            { i: "total-balance", x: 0, y: 0, w: 5, h: 4, minW: 3, minH: 3 },
            { i: "new-clients", x: 5, y: 0, w: 5, h: 4, minW: 3, minH: 3 },
            { i: "active-operations", x: 0, y: 4, w: 5, h: 4, minW: 3, minH: 3 },
            { i: "growth-rate", x: 5, y: 4, w: 5, h: 4, minW: 3, minH: 3 },
            { i: "chart-placeholder", x: 0, y: 8, w: 10, h: 6, minW: 6, minH: 4 },
            { i: "chart-placeholder-2", x: 0, y: 14, w: 10, h: 6, minW: 6, minH: 4 },
        ],
        sm: [
            { i: "total-balance", x: 0, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "new-clients", x: 3, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "active-operations", x: 0, y: 4, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "growth-rate", x: 3, y: 4, w: 3, h: 4, minW: 2, minH: 3 },
            { i: "chart-placeholder", x: 0, y: 8, w: 6, h: 6, minW: 6, minH: 4 },
            { i: "chart-placeholder-2", x: 0, y: 14, w: 6, h: 6, minW: 6, minH: 4 },
        ],
        xs: [
            { i: "total-balance", x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 3 },
            { i: "new-clients", x: 0, y: 4, w: 4, h: 4, minW: 4, minH: 3 },
            { i: "active-operations", x: 0, y: 8, w: 4, h: 4, minW: 4, minH: 3 },
            { i: "growth-rate", x: 0, y: 12, w: 4, h: 4, minW: 4, minH: 3 },
            { i: "chart-placeholder", x: 0, y: 16, w: 4, h: 6, minW: 4, minH: 4 },
            { i: "chart-placeholder-2", x: 0, y: 22, w: 4, h: 6, minW: 4, minH: 4 },
        ],
    },
    "/dashboard/test_2": {
        lg: [],
        md: [],
        sm: [],
        xs: [],
    },
    "/dashboard/test_3": {
        lg: [],
        md: [],
        sm: [],
        xs: [],
    },
};

export function GridLayoutProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [layouts, setLayoutsState] = useState<Layouts>(
        defaultLayouts[pathname] || defaultLayouts["/dashboard/test_1"]
    );

    // Загрузка из localStorage при монтировании и смене страницы
    useEffect(() => {
        const savedLayouts = localStorage.getItem(`grid_layout_${pathname}`);
        if (savedLayouts) {
            try {
                const parsed = JSON.parse(savedLayouts);
                setLayoutsState(parsed);
            } catch (error) {
                console.error("Error parsing saved layouts:", error);
                setLayoutsState(defaultLayouts[pathname] || defaultLayouts["/dashboard/test_1"]);
            }
        } else {
            setLayoutsState(defaultLayouts[pathname] || defaultLayouts["/dashboard/test_1"]);
        }
    }, [pathname]);

    // Сохранение в localStorage при изменении
    const setLayouts = (newLayouts: Layouts) => {
        setLayoutsState(newLayouts);
        localStorage.setItem(`grid_layout_${pathname}`, JSON.stringify(newLayouts));
    };

    // Сброс к дефолтным значениям для текущей страницы
    const resetLayout = () => {
        const defaultLayout = defaultLayouts[pathname] || defaultLayouts["/dashboard/test_1"];
        setLayoutsState(defaultLayout);
        localStorage.removeItem(`grid_layout_${pathname}`);
    };

    return (
        <GridLayoutContext.Provider value={{ layouts, setLayouts, resetLayout }}>
            {children}
        </GridLayoutContext.Provider>
    );
}

// Hook для использования контекста
export function useGridLayout() {
    const context = useContext(GridLayoutContext);
    if (context === undefined) {
        throw new Error("useGridLayout must be used within a GridLayoutProvider");
    }
    return context;
}