import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "React",
  role: "The component model Sand is written in.",
  owns: "React owns composition, state, and the component tree. Every file under components/ui is a React component. The docs site is a React app with React Router. Base UI's render prop is a React pattern Sand uses throughout.",
  code: `import { useState } from "react";
import { Switch } from "sand/ui/switch";

function Digest() {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onCheckedChange={setOn} />;
}`,
  parts: [
    {
      name: "Component",
      href: "https://react.dev/learn/your-first-component",
    },
    { name: "JSX", href: "https://react.dev/learn/writing-markup-with-jsx" },
    { name: "useState", href: "https://react.dev/reference/react/useState" },
    { name: "useEffect", href: "https://react.dev/reference/react/useEffect" },
    {
      name: "useContext",
      href: "https://react.dev/reference/react/useContext",
    },
    {
      name: "createContext",
      href: "https://react.dev/reference/react/createContext",
    },
    { name: "useRef", href: "https://react.dev/reference/react/useRef" },
    { name: "useId", href: "https://react.dev/reference/react/useId" },
    {
      name: "useLayoutEffect",
      href: "https://react.dev/reference/react/useLayoutEffect",
    },
    {
      name: "createRoot",
      href: "https://react.dev/reference/react-dom/client/createRoot",
    },
    { name: "react-dom", href: "https://react.dev/reference/react-dom" },
    { name: "React Router", href: "https://reactrouter.com/home" },
  ],
  links: [
    { label: "React docs", href: "https://react.dev" },
    {
      label: "Hooks reference",
      href: "https://react.dev/reference/react",
    },
    { label: "Source on GitHub", href: "https://github.com/facebook/react" },
    { label: "Releases", href: "https://github.com/facebook/react/releases" },
  ],
  alternatives: [
    {
      name: "Vue",
      comparison:
        "A template-based component model. Sand follows React because shadcn, Base UI, and the Vite template are React-first.",
      href: "https://vuejs.org",
      linkLabel: "vuejs.org",
    },
    {
      name: "Solid",
      comparison:
        "Fine-grained reactivity without a virtual DOM. Would replace every component and the primitive layer. Not used.",
      href: "https://www.solidjs.com",
      linkLabel: "solidjs.com",
    },
  ],
};

export function ReactPage() {
  return <MechanicPage mechanic={mechanic} />;
}
