"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
    return (
        <div
            data-slot="table-container"
            className={cn(
                "relative w-full overflow-hidden",
                // Glassmorphism эффект с еле-еле голубоватыми цветами
                "backdrop-blur-[10px] backdrop-saturate-150",
                // Заливка: еле-еле голубоватый для светлой темы, еще более темный зеленый для темной
                "bg-gradient-to-br from-slate-200/35 via-blue-100/25 to-slate-100/30 dark:from-emerald-950/80 dark:via-green-950/60 dark:to-slate-950/75",
                // Обводка с цветовыми акцентами
                "border border-slate-200/40 dark:border-emerald-800/50",
                "rounded-lg p-4",
                // ЭЛЕГАНТНЫЙ Neumorphism для таблицы - мягкие приподнятые тени
                "shadow-[0_10px_40px_rgba(0,0,0,0.06),0_4px_15px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.3)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3),0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]"
            )}
        >
            <table
                data-slot="table"
                className={cn("w-full caption-bottom text-sm", className)}
                {...props}
            />
        </div>
    )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
    return (
        <thead
            data-slot="table-header"
            className={cn(
                "[&_tr]:border-b [&_tr]:bg-gradient-to-r [&_tr]:from-slate-800/95 [&_tr]:via-slate-700/95 [&_tr]:to-slate-800/95 dark:[&_tr]:from-slate-900/98 dark:[&_tr]:via-slate-800/98 dark:[&_tr]:to-slate-900/98",
                // Закругленные углы на tr
                "[&_tr]:rounded-lg",
                // СТИЛЬНЫЙ Neumorphism для заголовка - утопленный эффект
                "[&_tr]:shadow-[0_6px_20px_rgba(0,0,0,0.15),inset_0_-1px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] dark:[&_tr]:shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]",
                className
            )}
            {...props}
        />
    )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
    return (
        <tbody
            data-slot="table-body"
            className={cn("[&_tr:last-child]:border-0", className)}
            {...props}
        />
    )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
    return (
        <tfoot
            data-slot="table-footer"
            className={cn(
                "bg-slate-100/20 dark:bg-emerald-900/20 border-t font-medium [&>tr]:last:border-b-0",
                className
            )}
            {...props}
        />
    )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
    return (
        <tr
            data-slot="table-row"
            className={cn(
                "data-[state=selected]:bg-slate-200/30 dark:data-[state=selected]:bg-emerald-800/30 border-b transition-colors",
                // Убираем hover эффект для строк заголовка, оставляем только для обычных строк
                "[thead_&]:hover:bg-transparent [tbody_&]:hover:bg-white/30 [tbody_&]:dark:hover:bg-emerald-900/25",
                className
            )}
            {...props}
        />
    )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
    return (
        <th
            data-slot="table-head"
            className={cn(
                "text-white dark:text-gray-100 h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                // Закругления для первой и последней ячейки заголовка
                "first:rounded-l-lg last:rounded-r-lg",
                className
            )}
            {...props}
        />
    )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
    return (
        <td
            data-slot="table-cell"
            className={cn(
                "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

function TableCaption({
                          className,
                          ...props
                      }: React.ComponentProps<"caption">) {
    return (
        <caption
            data-slot="table-caption"
            className={cn("text-muted-foreground mt-4 text-sm", className)}
            {...props}
        />
    )
}

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}