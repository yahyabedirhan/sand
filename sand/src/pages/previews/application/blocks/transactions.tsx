import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transactions = [
  {
    id: "txn-1842",
    title: "Harbor Studio",
    description: "Invoice 1842",
    amount: "+$2,400.00",
    date: "Sep 18",
    initials: "HS",
    status: "completed",
  },
  {
    id: "txn-1837",
    title: "Quill Notes",
    description: "Seat upgrade",
    amount: "-$48.00",
    date: "Sep 16",
    initials: "QN",
    status: "completed",
  },
  {
    id: "txn-1831",
    title: "River Credit",
    description: "Pending transfer",
    amount: "-$320.00",
    date: "Sep 14",
    initials: "RC",
    status: "pending",
  },
  {
    id: "txn-1824",
    title: "Lumen Pay",
    description: "Failed payout",
    amount: "-$75.00",
    date: "Sep 12",
    initials: "LP",
    status: "cancelled",
  },
] as const;

const statuses = ["completed", "pending", "cancelled"] as const;

function TransactionList({ status }: { status: (typeof statuses)[number] }) {
  const rows = transactions.filter(
    (transaction) => transaction.status === status,
  );

  return (
    <ItemGroup className="gap-0">
      {rows.map((transaction) => {
        const credit = transaction.amount.startsWith("+");

        return (
          <Item key={transaction.id} size="sm">
            <ItemMedia>
              <span className="flex size-8 items-center justify-center rounded-md bg-muted font-mono text-caption">
                {transaction.initials}
              </span>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{transaction.title}</ItemTitle>
              <ItemDescription>
                {transaction.description} · {transaction.date}
              </ItemDescription>
            </ItemContent>
            <div
              className={
                credit
                  ? "font-mono tabular-nums"
                  : "font-mono text-destructive tabular-nums"
              }
            >
              {transaction.amount}
            </div>
          </Item>
        );
      })}
    </ItemGroup>
  );
}

export function Transactions() {
  return (
    <Card>
      <Tabs defaultValue="completed" className="gap-(--card-spacing)">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Recent ledger activity</CardDescription>
          <CardAction>
            <TabsList>
              <TabsTrigger value="completed">Done</TabsTrigger>
              <TabsTrigger value="pending">Hold</TabsTrigger>
              <TabsTrigger value="cancelled">Void</TabsTrigger>
            </TabsList>
          </CardAction>
        </CardHeader>
        <CardContent>
          {statuses.map((status) => (
            <TabsContent key={status} value={status}>
              <TransactionList status={status} />
            </TabsContent>
          ))}
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" className="w-full">
            View all
          </Button>
        </CardFooter>
      </Tabs>
    </Card>
  );
}
