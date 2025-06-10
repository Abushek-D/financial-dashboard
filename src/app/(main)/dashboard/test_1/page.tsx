"use client";

import { useState, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { BalanceWidget } from "@/components/widgets/balance-widget";
import { ClientsWidget } from "@/components/widgets/clients-widget";
import { OperationsWidget } from "@/components/widgets/operations-widget";
import { GrowthWidget } from "@/components/widgets/growth-widget";

// Импорт CSS для react-grid-layout
import "react-grid-layout/css/styles.css";
import "react-grid-layout/css/react-resizable.css";

// ResponsiveGridLayout с WidthProvider
const ResponsiveGridLayout = WidthProvider(Responsive);

// Все доступные виджеты
const ALL_WIDGETS = [
    {
        id: 'balance',
        name: 'Общий баланс',
        component: 'BalanceWidget',
        defaultSize: { w: 4, h: 3 }
    },
    {
        id: 'clients',
        name: 'Новые клиенты',
        component: 'ClientsWidget',
        defaultSize: { w: 4, h: 3 }
    },
    {
        id: 'operations',
        name: 'Активные операции',
        component: 'OperationsWidget',
        defaultSize: { w: 4, h: 3 }
    },
    {
        id: 'growth',
        name: 'Темп роста',
        component: 'GrowthWidget',
        defaultSize: { w: 4, h: 3 }
    }
];

export default function Test1Page() {
    // Активные виджеты на сетке (пока только balance)
    const [items, setItems] = useState([
        {
            i: 'balance',
            x: 0,
            y: 0,
            w: 4,
            h: 3,
            component: 'BalanceWidget'
        }
    ]);

    const [layouts, setLayouts] = useState({});
    const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');
    const [cols, setCols] = useState({ lg: 16, md: 10, sm: 6, xs: 4, xxs: 2 });

    // Доступные для добавления виджеты (НЕ на сетке)
    const availableWidgets = useMemo(() => {
        return ALL_WIDGETS.filter(widget =>
            !items.some(item => item.i === widget.id)
        );
    }, [items]);

    // Обработчики событий
    const onLayoutChange = (layout, layouts) => {
        setLayouts(layouts);
    };

    const onBreakpointChange = (breakpoint, cols) => {
        setCurrentBreakpoint(breakpoint);
        setCols(cols);
    };

    // Добавление виджета
    const addWidget = (widget) => {
        const newItem = {
            i: widget.id,
            x: (items.length * 4) % cols[currentBreakpoint],
            y: Infinity, // помещает в конец
            w: widget.defaultSize.w,
            h: widget.defaultSize.h,
            component: widget.component
        };

        setItems(prevItems => [...prevItems, newItem]);
    };

    // Удаление виджета
    const removeWidget = (widgetId) => {
        setItems(prevItems => prevItems.filter(item => item.i !== widgetId));
    };

    // Рендер виджета
    const createElement = (item) => {
        const removeStyle = {
            position: 'absolute' as const,
            right: '8px',
            top: '8px',
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            zIndex: 1000
        };

        return (
            <div key={item.i} className="relative">
                {/* Кнопка удаления */}
                <span
                    style={removeStyle}
                    onClick={() => removeWidget(item.i)}
                    className="hover:bg-red-500 hover:text-white transition-colors"
                    title={`Удалить ${item.component}`}
                >
          ×
        </span>

                {/* Рендер компонента виджета */}
                {item.component === 'BalanceWidget' && <BalanceWidget />}
                {item.component === 'ClientsWidget' && <ClientsWidget />}
                {item.component === 'OperationsWidget' && <OperationsWidget />}
                {item.component === 'GrowthWidget' && <GrowthWidget />}
            </div>
        );
    };

    // Обработчик контекстного меню (пока просто alert)
    const handleContextMenu = (e) => {
        e.preventDefault();

        if (availableWidgets.length === 0) {
            alert('Все виджеты уже добавлены на dashboard');
            return;
        }

        // Временное решение - показываем доступные виджеты через prompt
        const widgetsList = availableWidgets.map((w, i) => `${i + 1}. ${w.name}`).join('\n');
        const choice = prompt(`Доступные виджеты для добавления:\n\n${widgetsList}\n\nВведите номер виджета для добавления:`);

        const index = parseInt(choice) - 1;
        if (index >= 0 && index < availableWidgets.length) {
            addWidget(availableWidgets[index]);
        }
    };

    return (
        <div className="flex flex-1 flex-col p-4">

            {/* Контейнер с контекстным меню */}
            <div
                className="w-full min-h-[600px] bg-transparent"
                onContextMenu={handleContextMenu}
                style={{ userSelect: 'none' }}
            >

                {/* Основной grid контейнер */}
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    onLayoutChange={onLayoutChange}
                    onBreakpointChange={onBreakpointChange}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={cols}
                    rowHeight={60}
                    margin={[16, 16]}
                    containerPadding={[0, 0]}
                    isDraggable={true}
                    isResizable={true}
                    autoSize={true}
                    preventCollision={false}
                    compactType="vertical"
                >
                    {items.map(createElement)}
                </ResponsiveGridLayout>

            </div>

            {/* Информационная панель */}
            <div className="mt-6 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                <h3 className="font-semibold mb-2">Управление виджетами:</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                    <div><strong>Активные виджеты:</strong> {items.length} из {ALL_WIDGETS.length}</div>
                    <div><strong>Доступны для добавления:</strong> {availableWidgets.map(w => w.name).join(', ') || 'Все добавлены'}</div>
                    <div><strong>Управление:</strong> ПКМ по области → добавить виджет, × на виджете → удалить</div>
                </div>
            </div>
        </div>
    );
}