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

const projects = [
  {
    name: "North gallery",
    owner: "Sofia Davis",
    status: "Live",
    updated: "Sep 18",
    hours: "142",
  },
  {
    name: "Harbor type specimen",
    owner: "Noah Cole",
    status: "Review",
    updated: "Sep 16",
    hours: "86",
  },
  {
    name: "Atlas wayfinding",
    owner: "Maya Chen",
    status: "Live",
    updated: "Sep 12",
    hours: "210",
  },
  {
    name: "Dune archive",
    owner: "Sofia Davis",
    status: "Paused",
    updated: "Sep 4",
    hours: "38",
  },
  {
    name: "Field notes site",
    owner: "Jonah West",
    status: "Live",
    updated: "Aug 29",
    hours: "164",
  },
] as const;

export function ProjectsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active projects</CardTitle>
        <CardDescription>Hours logged against each brief</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.name}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.owner}</TableCell>
                <TableCell>
                  <Badge variant="outline">{project.status}</Badge>
                </TableCell>
                <TableCell>{project.updated}</TableCell>
                <TableCell className="text-right font-mono tabular-nums">
                  {project.hours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
