import React, { useState } from "react";
import { Button } from "@ui5/webcomponents-react/lib/Button";
import { BarChart } from "@ui5/webcomponents-react-charts/lib/BarChart";
import { LineChart } from "@ui5/webcomponents-react-charts/lib/LineChart";

export function Charts() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  const datasets = [
    {
      label: "Stock Price",
      data: [65, 59, 80, 81, 56, 55, 62]
    }
  ];
  const handleButtonClick = () => {
    if (toggleCharts === "lineChart") {
      setToggleCharts("barChart");
    } else {
      setToggleCharts("lineChart");
    }
  };
  return (
    <>
      <Button onClick={handleButtonClick}>Toggle between charts</Button>
      {toggleCharts === "lineChart" ? (
        <LineChart datasets={datasets} labels={labels} />
      ) : (
        <BarChart datasets={datasets} labels={labels} />
      )}
    </>
  );
}
