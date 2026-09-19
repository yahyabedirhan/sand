import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  { id: "INV-0421", date: "Sep 1", amount: "$48.00", status: "Paid" },
  { id: "INV-0397", date: "Aug 1", amount: "$48.00", status: "Paid" },
  { id: "INV-0364", date: "Jul 1", amount: "$42.00", status: "Paid" },
] as const;

export function InvoicesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent invoices</CardTitle>
        <CardDescription>Your last three billing periods</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-mono">{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell className="text-right font-mono tabular-nums">
                  {invoice.amount}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{invoice.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
