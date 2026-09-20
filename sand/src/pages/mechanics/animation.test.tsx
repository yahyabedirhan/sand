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

const namedAnimations = [
  "Fade in",
  "Zoom in",
  "Slide from top",
  "Slide from bottom",
  "Slide from left",
  "Slide from right",
  "Fade out",
  "Zoom out",
];

function replayNamedAnimation(name: string) {
  const replay = screen.getByRole("button", { name: `Replay ${name}` });
  const row = replay.closest("tr");
  expect(row).not.toBeNull();
  const preview = within(row!).getByRole("img", { name: `${name} animation` });
  expect(preview).toHaveStyle({ animationDuration: "1s" });

  fireEvent.click(replay);

  expect(preview).not.toBeInTheDocument();
  const restarted = within(row!).getByRole("img", {
    name: `${name} animation`,
  });
  expect(restarted).toBeInTheDocument();
  expect(restarted).toHaveStyle({ animationDuration: "1s" });
}

test("the named table lists enter, exit, and directional overlay utilities", () => {
  renderAnimationPage();

  for (const name of namedAnimations) {
    const replay = screen.getByRole("button", { name: `Replay ${name}` });
    const row = replay.closest("tr");
    expect(row).not.toBeNull();
    expect(within(row!).getByText(name)).toBeInTheDocument();
    expect(
      within(row!).getByRole("img", { name: `${name} animation` }),
    ).toBeInTheDocument();
  }
});

test("replaying a named animation remounts a preview slow enough to observe", () => {
  renderAnimationPage();
  replayNamedAnimation("Fade in");
});

test("replaying a new named animation remounts that row's preview", () => {
  renderAnimationPage();
  replayNamedAnimation("Zoom out");
});
