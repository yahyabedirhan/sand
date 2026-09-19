import { BrowserRouter, Route, Routes } from "react-router";

import { TooltipProvider } from "@/components/ui/tooltip";
import { pagePath, pages } from "@/docs/registry";
import { Shell } from "@/docs/shell";
import { ThemeProvider } from "@/docs/theme";
import { TodoPage } from "@/docs/todo-page";

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Shell />}>
              {pages.map((page) => {
                const Component = page.component ?? TodoPage;
                return (
                  <Route
                    key={pagePath(page)}
                    path={pagePath(page)}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}
