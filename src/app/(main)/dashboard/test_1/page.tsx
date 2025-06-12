"use client";

import {useCallback} from "react";
import {Responsive, WidthProvider, Layout} from "react-grid-layout";
import {useGridLayout} from "@/contexts/grid-layout-context";

// UI компоненты
import {TrendingDown, TrendingUp, Wallet, Users, TrendingUp as Growth, BarChart3, Minus, Maximize2, X} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Card, CardDescription, CardHeader, CardTitle, CardContent} from "@/components/ui/card";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Test1Page() {
    const {layouts, setLayouts} = useGridLayout();

    const onLayoutChange = useCallback((layout: Layout[], allLayouts: any) => {
        setLayouts(allLayouts);
    }, [setLayouts]);

    return (
        <ResponsiveGridLayout
            className="layout h-full w-full"           // CSS классы: layout для стилей, h-full w-full для заполнения всей области
            layouts={layouts}                          // Конфигурация позиций виджетов для разных breakpoints (lg/md/sm/xs)
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}}  // Ширина экрана для переключения между layouts
            cols={{lg: 12, md: 10, sm: 6, xs: 4}}    // Количество колонок в сетке для каждого breakpoint
            rowHeight={60}                            // Высота одной строки в пикселях
            margin={[16, 16]}                         // Отступы между виджетами [горизонтальный, вертикальный]
            isDraggable={true}                        // Разрешить перетаскивание виджетов
            isResizable={true}                        // Разрешить изменение размеров виджетов
            onLayoutChange={onLayoutChange}           // Callback при изменении позиций - сохраняет в localStorage
            draggableHandle=".react-grid-draghandle"  // CSS селектор элемента за который можно тащить (только header виджета)
            autoSize={false}                          // Отключить автоматический расчет высоты контейнера
            compactType="vertical"                    // Вертикальная компактификация
        >
            {/* Виджет 1: Общий баланс */}
            <Card key="total-balance" className="@container/card group">
                <CardHeader className="react-grid-draghandle cursor-move flex-row items-center justify-between space-y-0 pb-2 pt-1 px-4">
                    <div className="p-1.5 rounded-lg bg-primary/10 backdrop-blur-sm">
                        <Wallet className="size-3.5 text-primary"/>
                    </div>
                    <CardDescription className="text-sm flex-1 ml-2">Общий баланс</CardDescription>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Minus className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Maximize2 className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <X className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 h-full">
                    <div className="flex items-start justify-between">
                        <CardTitle
                            className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            $1,247,350.00
                        </CardTitle>
                        <Badge variant="outline"
                               className="bg-green-50/80 border-green-200/60 text-green-700 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400">
                            <TrendingUp className="size-3"/>
                            +12.5%
                        </Badge>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                            Рост за месяц <TrendingUp className="size-4"/>
                        </div>
                        <div className="text-sm text-muted-foreground/70">USD эквивалент всех счетов</div>
                    </div>
                </CardContent>
            </Card>

            {/* Виджет 2: Новые клиенты */}
            <Card key="new-clients" className="@container/card group">
                <CardHeader className="react-grid-draghandle cursor-move flex-row items-center justify-between space-y-0 pb-2 pt-1 px-4">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 backdrop-blur-sm">
                        <Users className="size-3.5 text-blue-600 dark:text-blue-400"/>
                    </div>
                    <CardDescription className="text-sm flex-1 ml-2">Новые клиенты</CardDescription>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Minus className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Maximize2 className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <X className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 h-full">
                    <div className="flex items-start justify-between">
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            47
                        </CardTitle>
                        <Badge variant="outline"
                               className="bg-red-50/80 border-red-200/60 text-red-700 dark:bg-red-900/30 dark:border-red-700/50 dark:text-red-400">
                            <TrendingDown className="size-3"/>
                            -8.2%
                        </Badge>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                            Снижение за период <TrendingDown className="size-4"/>
                        </div>
                        <div className="text-sm text-muted-foreground/70">Требует внимания привлечения</div>
                    </div>
                </CardContent>
            </Card>

            {/* Виджет 3: Активные операции */}
            <Card key="active-operations" className="@container/card group">
                <CardHeader className="react-grid-draghandle cursor-move flex-row items-center justify-between space-y-0 pb-2 pt-1 px-4">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 backdrop-blur-sm">
                        <BarChart3 className="size-3.5 text-purple-600 dark:text-purple-400"/>
                    </div>
                    <CardDescription className="text-sm flex-1 ml-2">Активные операции</CardDescription>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Minus className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Maximize2 className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <X className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 h-full">
                    <div className="flex items-start justify-between">
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            3,127
                        </CardTitle>
                        <Badge variant="outline"
                               className="bg-green-50/80 border-green-200/60 text-green-700 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400">
                            <TrendingUp className="size-3"/>
                            +24.1%
                        </Badge>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                            Высокая активность <TrendingUp className="size-4"/>
                        </div>
                        <div className="text-sm text-muted-foreground/70">Превышает плановые показатели</div>
                    </div>
                </CardContent>
            </Card>

            {/* Виджет 4: Темп роста */}
            <Card key="growth-rate" className="@container/card group">
                <CardHeader className="react-grid-draghandle cursor-move flex-row items-center justify-between space-y-0 pb-2 pt-1 px-4">
                    <div className="p-1.5 rounded-lg bg-orange-500/10 backdrop-blur-sm">
                        <Growth className="size-3.5 text-orange-600 dark:text-orange-400"/>
                    </div>
                    <CardDescription className="text-sm flex-1 ml-2">Темп роста</CardDescription>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Minus className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Maximize2 className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <X className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 h-full">
                    <div className="flex items-start justify-between">
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            +15.7%
                        </CardTitle>
                        <Badge variant="outline"
                               className="bg-green-50/80 border-green-200/60 text-green-700 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400">
                            <TrendingUp className="size-3"/>
                            +3.2%
                        </Badge>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                            Стабильный рост <TrendingUp className="size-4"/>
                        </div>
                        <div className="text-sm text-muted-foreground/70">Соответствует прогнозам</div>
                    </div>
                </CardContent>
            </Card>

            {/* Виджет 5: Заглушка для графика */}
            <Card key="chart-placeholder" className="@container/card group">
                <CardHeader className="react-grid-draghandle cursor-move flex-row items-center justify-between space-y-0 pb-2 pt-1 px-4">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm">
                        <BarChart3 className="size-3.5 text-emerald-600 dark:text-emerald-400"/>
                    </div>
                    <CardDescription className="text-sm flex-1 ml-2">Excel Widget</CardDescription>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Minus className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Maximize2 className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <X className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-full">
                    <div className="text-muted-foreground">Chart goes here</div>
                </CardContent>
            </Card>

            {/* Виджет 6: Еще одна заглушка для графика */}
            <Card key="chart-placeholder-2" className="@container/card group">
                <CardHeader className="react-grid-draghandle cursor-move flex-row items-center justify-between space-y-0 pb-2 pt-1 px-4">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 backdrop-blur-sm">
                        <BarChart3 className="size-3.5 text-indigo-600 dark:text-indigo-400"/>
                    </div>
                    <CardDescription className="text-sm flex-1 ml-2">Table Widget</CardDescription>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Minus className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <Maximize2 className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                            <X className="size-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-full">
                    <div className="text-muted-foreground">Chart goes here</div>
                </CardContent>
            </Card>
        </ResponsiveGridLayout>
    );
}