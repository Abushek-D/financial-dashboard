import { IconTrendingDown, IconTrendingUp, IconWallet, IconUsers, IconChartLine, IconGrowth } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function SectionCards() {
  return (
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {/* Общий баланс */}
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

        {/* Новые клиенты */}
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

        {/* Активные транзакции */}
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

        {/* Темп роста */}
        <Card className="@container/card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-orange-500/10 backdrop-blur-sm">
                <IconGrowth className="size-4 text-orange-600 dark:text-orange-400" />
              </div>
              <CardDescription>Темп роста</CardDescription>
            </div>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              +15.7%
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="bg-green-50/80 border-green-200/60 text-green-700 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400">
                <IconTrendingUp className="size-3" />
                +3.2%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-green-600 dark:text-green-400">
              Стабильный рост <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground/70">Соответствует прогнозам</div>
          </CardFooter>
        </Card>
      </div>
  );
}