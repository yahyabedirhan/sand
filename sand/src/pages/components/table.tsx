import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ComponentPage } from "@/docs/component-page";

const invoices = [
  { id: "INV-0421", date: "Sep 1", amount: "$48.00" },
  { id: "INV-0397", date: "Aug 1", amount: "$48.00" },
  { id: "INV-0362", date: "Jul 1", amount: "$48.00" },
];

const code = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "sand/ui/table";

const invoices = [
  { id: "INV-0421", date: "Sep 1", amount: "$48.00" },
  { id: "INV-0397", date: "Aug 1", amount: "$48.00" },
  { id: "INV-0362", date: "Jul 1", amount: "$48.00" },
];

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell>{invoice.id}</TableCell>
        <TableCell>{invoice.date}</TableCell>
        <TableCell>{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`;

function TableDemo() {
  return (
    <div className="min-w-96">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function TablePage() {
  return (
    <ComponentPage
      title="Table"
      lead="Presents rows of related data."
      demo={<TableDemo />}
      code={code}
    />
  );
}
