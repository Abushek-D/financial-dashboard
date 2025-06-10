import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                // Glassmorphism основа с красивыми цветами
                "backdrop-blur-[10px] backdrop-saturate-150",
                // Заливка виджетов: еле-еле голубоватый для светлой темы, еще более темный зеленый для темной
                "bg-gradient-to-br from-slate-200/35 via-blue-100/25 to-slate-100/30 dark:from-emerald-950/80 dark:via-green-950/60 dark:to-slate-950/75",
                // Обводка с цветовыми акцентами
                "border border-slate-200/40 dark:border-emerald-800/50",
                // Основные стили карточки
                "text-card-foreground flex flex-col gap-6 rounded-xl py-6",
                // ЭЛЕГАНТНЫЙ Neumorphism - мягкие приподнятые тени
                "shadow-[0_10px_40px_rgba(0,0,0,0.06),0_4px_15px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.3)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3),0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]",
                // Плавная анимация с наложением белого слоя вместо смены градиента
                "relative transition-all duration-300 ease-out",
                // Псевдоэлемент для плавного hover эффекта
                "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/0 before:via-white/0 before:to-white/0 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none",
                "hover:before:opacity-100 hover:before:from-white/25 hover:before:via-blue-50/15 hover:before:to-white/20",
                "dark:hover:before:from-emerald-950/40 dark:hover:before:via-green-950/25 dark:hover:before:to-slate-950/35",
                // ДЕЛИКАТНЫЙ Neumorphism hover - слегка приподнимаем
                "hover:shadow-[0_15px_50px_rgba(0,0,0,0.08),0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.4)] dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.4),0_6px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]",
                className
            )}
            {...props}
        />
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}
        />
    )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn(
                "leading-none font-semibold",
                // Улучшенная читаемость на glassmorphism фоне
                "text-foreground/90 dark:text-foreground/95",
                className
            )}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn(
                "text-muted-foreground/80 text-sm",
                // Улучшенная читаемость
                "dark:text-muted-foreground/90",
                className
            )}
            {...props}
        />
    )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center px-6 [.border-t]:pt-6",
                // Улучшенная читаемость для footer текста
                "text-foreground/80 dark:text-foreground/85",
                className
            )}
            {...props}
        />
    )
}

// Дополнительные варианты карточек для разных целей
function GlassCard({
                       variant = "default",
                       className,
                       ...props
                   }: React.ComponentProps<"div"> & {
    variant?: "default" | "subtle" | "intense" | "financial"
}) {
    const variants = {
        default: cn(
            "backdrop-blur-[10px]",
            "bg-gradient-to-br from-slate-200/35 via-blue-100/25 to-slate-100/30 dark:from-emerald-950/80 dark:via-green-950/60 dark:to-slate-950/75",
            "border-slate-200/40 dark:border-emerald-800/50"
        ),
        subtle: cn(
            "backdrop-blur-[6px]",
            "bg-gradient-to-br from-slate-100/25 via-blue-50/15 to-slate-50/20 dark:from-emerald-950/60 dark:via-green-950/40 dark:to-slate-950/55",
            "border-slate-100/30 dark:border-emerald-800/35"
        ),
        intense: cn(
            "backdrop-blur-[16px]",
            "bg-gradient-to-br from-slate-300/50 via-blue-200/40 to-slate-200/45 dark:from-emerald-900/85 dark:via-green-900/70 dark:to-slate-900/80",
            "border-slate-300/60 dark:border-emerald-700/70"
        ),
        financial: cn(
            "backdrop-blur-[12px]",
            "bg-gradient-to-br from-primary/15 via-primary/10 to-primary/12 dark:from-emerald-950/75 dark:via-green-950/55 dark:to-slate-950/70",
            "border-primary/30 dark:border-emerald-800/55"
        )
    }

    return (
        <div
            className={cn(
                // Базовые glassmorphism стили
                variants[variant],
                "backdrop-saturate-150 border",
                // Neumorphism + Glassmorphism тени
                "rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2)]",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.2)]",
                // Мягкий hover эффект с neumorphism
                "transition-all duration-200 ease-out",
                "hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]",
                className
            )}
            {...props}
        />
    )
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
    GlassCard,
}