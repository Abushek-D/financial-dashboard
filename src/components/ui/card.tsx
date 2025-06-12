import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                // Нежный glassmorphism эффект
                "backdrop-blur-[6px] backdrop-saturate-[1.3]",
                // Мягкий градиент для нежности
                "bg-gradient-to-br from-white/35 to-slate-50/25 dark:from-slate-800/45 dark:to-slate-900/60",
                // Деликатная обводка
                "border border-white/40 dark:border-slate-700/50",
                // Основные стили + GPU композитинг
                "text-card-foreground flex flex-col gap-4 rounded-xl transform-gpu",
                // Оптимизированные 3 тени для баланса качества и производительности
                "shadow-[0_8px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)]",
                // Только тени меняются при hover - БЕЗ движения
                "transition-shadow duration-200 ease-out",
                "hover:shadow-[0_16px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.5)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.18),inset_0_2px_0_rgba(255,255,255,0.2)]",
                // CSS containment для изоляции перерисовок
                "isolate",
                className
            )}
            style={{
                // Принудительное создание композитного слоя для GPU ускорения
                willChange: 'box-shadow',
                contain: 'layout style paint'
            }}
            {...props}
        />
    )
}

// function Card({ className, ...props }: React.ComponentProps<"div">) {
//     return (
//         <div
//             data-slot="card"
//             className={cn(
//                 // Glassmorphism основа
//                 "backdrop-blur-[10px] backdrop-saturate-150",
//                 // Заливка виджетов
//                 "bg-gradient-to-br from-slate-200/35 via-blue-100/25 to-slate-100/30 dark:from-emerald-950/80 dark:via-green-950/60 dark:to-slate-950/75",
//                 // Обводка
//                 "border border-slate-200/40 dark:border-emerald-800/50",
//                 // Основные стили
//                 "text-card-foreground flex flex-col gap-4 rounded-xl",
//                 // Neumorphism тени
//                 "shadow-[0_10px_40px_rgba(0,0,0,0.06),0_4px_15px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.3)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3),0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]",
//                 // Простой hover эффект
//                 "transition-shadow duration-300 ease-out",
//                 "hover:shadow-[0_15px_50px_rgba(0,0,0,0.08),0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.4)] dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.4),0_6px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]",
//                 className
//             )}
//             {...props}
//         />
//     )
// }

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "flex flex-col gap-1.5",
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
                "text-muted-foreground text-sm",
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
            className={cn("p-4", className)}
            {...props}
        />
    )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center text-sm p-4",
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
}