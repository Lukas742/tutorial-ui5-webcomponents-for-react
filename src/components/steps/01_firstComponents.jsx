import React from "react";
import { Button } from "@ui5/webcomponents-react/lib/Button";

export function FirstComponent() {
  return (
    <div>
      <Button onClick={() => alert("Hello World")}>My Button</Button>
    </div>
  );
}
