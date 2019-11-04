import React from "react";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function DashboardWithRouting() {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("./");
  };

  return (
    <>
      <ShellBar
        logo={"reactLogo.png"}
        profile={"profilePictureExample.png"}
        primaryTitle={"My App"}
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem src="sap-icon://add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}
