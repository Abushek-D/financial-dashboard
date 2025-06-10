import { IconTrendingUp, IconWallet } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function BalanceWidget() {
    return (
        <Card className="@container/card">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                        <IconWallet className="size-4 text-primary" />
                    </div>
                    <CardDescription>Общий баланс</CardDescription>
                </div>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    $1,247,350.00
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className="bg-green-50/80 border-green-200/60 text-green-700 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400">
                        <IconTrendingUp className="size-3" />
                        +12.5%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium text-green-600 dark:text-green-400">
                    Рост за месяц <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground/70">USD эквивалент всех счетов</div>
            </CardFooter>
        </Card>
    );
}