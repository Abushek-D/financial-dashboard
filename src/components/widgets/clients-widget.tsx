import { IconTrendingDown, IconUsers } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ClientsWidget() {
    return (
        <Card className="@container/card">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm">
                        <IconUsers className="size-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardDescription>Новые клиенты</CardDescription>
                </div>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    47
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className="bg-red-50/80 border-red-200/60 text-red-700 dark:bg-red-900/30 dark:border-red-700/50 dark:text-red-400">
                        <IconTrendingDown className="size-3" />
                        -8.2%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium text-red-600 dark:text-red-400">
                    Снижение за период <IconTrendingDown className="size-4" />
                </div>
                <div className="text-muted-foreground/70">Требует внимания привлечения</div>
            </CardFooter>
        </Card>
    );
}