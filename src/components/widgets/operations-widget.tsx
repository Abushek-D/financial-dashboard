import { IconTrendingUp, IconChartLine } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function OperationsWidget() {
    return (
        <Card className="@container/card">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-500/10 backdrop-blur-sm">
                        <IconChartLine className="size-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardDescription>Активные операции</CardDescription>
                </div>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    3,127
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className="bg-green-50/80 border-green-200/60 text-green-700 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400">
                        <IconTrendingUp className="size-3" />
                        +24.1%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium text-green-600 dark:text-green-400">
                    Высокая активность <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground/70">Превышает плановые показатели</div>
            </CardFooter>
        </Card>
    );
}