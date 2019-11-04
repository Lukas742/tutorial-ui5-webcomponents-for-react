import React from "react";
import { Button } from "@ui5/webcomponents-react/lib/Button";
import { Charts } from "./steps/02_chartLibrary";
import { Dashboard } from "./steps/03_dashboard";
import { DashboardWithRouting } from "./steps/04_routing/04_dashboardWithRouting";

export function MyApp() {
  return (
    <>
      <DashboardWithRouting />
    </>
  );
}
