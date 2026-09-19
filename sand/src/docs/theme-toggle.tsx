import { Button } from "@/components/ui/button";
import { useTheme } from "@/docs/use-theme";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
      {theme === "dark" ? "Light theme" : "Dark theme"}
    </Button>
  );
}
