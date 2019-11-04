import React, { useState } from "react";
import { Button } from "@ui5/webcomponents-react/lib/Button";
import { BarChart } from "@ui5/webcomponents-react-charts/lib/BarChart";
import { LineChart } from "@ui5/webcomponents-react-charts/lib/LineChart";
import { Card } from "@ui5/webcomponents-react/lib/Card";
import { List } from "@ui5/webcomponents-react/lib/List";
import { StandardListItem } from "@ui5/webcomponents-react/lib/StandardListItem";
import { ValueState } from "@ui5/webcomponents-react/lib/ValueState";
import { ProgressIndicator } from "@ui5/webcomponents-react/lib/ProgressIndicator";
import { Title } from "@ui5/webcomponents-react/lib/Title";
import { TitleLevel } from "@ui5/webcomponents-react/lib/TitleLevel";
import { FlexBox } from "@ui5/webcomponents-react/lib/FlexBox";
import { FlexBoxDirection } from "@ui5/webcomponents-react/lib/FlexBoxDirection";
import { Table } from "@ui5/webcomponents-react/lib/Table";
import { TableColumn } from "@ui5/webcomponents-react/lib/TableColumn";
import { TableRow } from "@ui5/webcomponents-react/lib/TableRow";
import { TableCell } from "@ui5/webcomponents-react/lib/TableCell";
import { Text } from "@ui5/webcomponents-react/lib/Text";
import { FlexBoxJustifyContent } from "@ui5/webcomponents-react/lib/FlexBoxJustifyContent";
import { FlexBoxWrap } from "@ui5/webcomponents-react/lib/FlexBoxWrap";
import { useHistory } from "react-router-dom";
import "@ui5/webcomponents/dist/icons/add.js";
import { MyCustomElement } from "../05_styling";

export function Home() {
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

  const tableColumns = [
    <TableColumn>
      <Text>Column 1</Text>
    </TableColumn>,
    <TableColumn>
      <Text>Column 2</Text>
    </TableColumn>,
    <TableColumn>
      <Text>Column 3</Text>
    </TableColumn>,
    <TableColumn>
      <Text>Column 4</Text>
    </TableColumn>,
    <TableColumn>
      <Text>Column 5</Text>
    </TableColumn>
  ];

  const handleButtonClick = () => {
    if (toggleCharts === "lineChart") {
      setToggleCharts("barChart");
    } else {
      setToggleCharts("lineChart");
    }
  };
  const history = useHistory();
  const handleHeaderClick = () => {
    history.push("/detail");
  };

  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
    >
      <MyCustomElement />
      <Card
        heading="Stock Price"
        subtitle="Charts"
        style={{ width: "300px", padding: "16px" }}
        headerInteractive
        onHeaderClick={handleHeaderClick}
      >
        <Button onClick={handleButtonClick}>Toggle between charts</Button>
        {toggleCharts === "lineChart" ? (
          <LineChart datasets={datasets} labels={labels} />
        ) : (
          <BarChart datasets={datasets} labels={labels} />
        )}
      </Card>
      <Card
        heading="Progress"
        subtitle="List"
        style={{ width: "300px", padding: "16px" }}
      >
        <List>
          <StandardListItem info="finished" infoState={ValueState.Success}>
            Activity 1
          </StandardListItem>
          <StandardListItem info="failed" infoState={ValueState.Error}>
            Activity 2
          </StandardListItem>
          <StandardListItem
            info="in progress"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 3</Title>
              <ProgressIndicator
                displayValue="89%"
                percentValue={89}
                width="180px"
                state={ValueState.Success}
              />
            </FlexBox>
          </StandardListItem>
          <StandardListItem
            info="in progress"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 3</Title>
              <ProgressIndicator
                displayValue="5%"
                percentValue={5}
                width="180px"
                state={ValueState.Error}
              />
            </FlexBox>
          </StandardListItem>
        </List>
      </Card>

      <Card heading="Table" style={{ maxWidth: "900px" }}>
        <Table columns={tableColumns}>
          <TableRow>
            <TableCell>
              <Text>Cell 1</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 2</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 3</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 4</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 5</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Cell 2.1</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 2.2</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 2.3</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 2.4</Text>
            </TableCell>
            <TableCell>
              <Text>Cell 2.5</Text>
            </TableCell>
          </TableRow>
        </Table>
      </Card>
    </FlexBox>
  );
}
