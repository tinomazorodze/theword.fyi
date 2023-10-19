import { LayoutConfig, DashboardWidget } from "../types";
import { Tutorials } from "./tutorials";

export function TutorialsWidget(config?: {
  layout?: LayoutConfig;
}): DashboardWidget {
  return {
    name: "sanity-tutorials",
    component: Tutorials,
    layout: config?.layout ?? { width: "full" },
  };
}
