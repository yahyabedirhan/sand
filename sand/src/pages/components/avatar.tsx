import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Avatar, AvatarFallback } from "sand/ui/avatar";

<Avatar>
  <AvatarFallback>DS</AvatarFallback>
</Avatar>`;

export function AvatarPage() {
  return (
    <ComponentPage
      title="Avatar"
      lead="Shows a person with an image or initials."
      demo={
        <Avatar>
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
      }
      code={code}
    />
  );
}
