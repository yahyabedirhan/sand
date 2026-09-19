import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "sand/ui/dialog";

<Dialog>
  <DialogTrigger render={<Button />}>Rename workspace</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Rename workspace</DialogTitle>
      <DialogDescription>
        This name is shown to everyone in the workspace.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>
        Cancel
      </DialogClose>
      <DialogClose render={<Button />}>Save</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Rename workspace</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename workspace</DialogTitle>
          <DialogDescription>
            This name is shown to everyone in the workspace.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogPage() {
  return (
    <ComponentPage
      title="Dialog"
      lead="Confirms or collects something in a modal overlay."
      demo={<DialogDemo />}
      code={code}
    />
  );
}
