import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/docs/theme";
import { AnimationPage } from "@/pages/mechanics/animation";

function renderAnimationPage() {
  render(
    <ThemeProvider>
      <TooltipProvider>
        <AnimationPage />
      </TooltipProvider>
    </ThemeProvider>,
  );
}

test("replaying a named animation remounts a preview slow enough to observe", () => {
  renderAnimationPage();

  const replay = screen.getByRole("button", { name: "Replay Fade in" });
  const row = replay.closest("tr");
  expect(row).not.toBeNull();
  const preview = within(row!).getByRole("img", { name: "Fade in animation" });
  expect(preview).toHaveStyle({ animationDuration: "1s" });

  fireEvent.click(replay);

  expect(preview).not.toBeInTheDocument();
  const restarted = within(row!).getByRole("img", {
    name: "Fade in animation",
  });
  expect(restarted).toBeInTheDocument();
  expect(restarted).toHaveStyle({ animationDuration: "1s" });
});
