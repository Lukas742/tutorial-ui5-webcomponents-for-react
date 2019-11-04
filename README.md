# UI5 Web Components for React - Tutorial

`ui5-webcomponents-react` is providing a Fiori-compliant React implementation by leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents).
This project was formerly known as `fiori-for-react`.<br/>To take the most of the tutorial, a basic knowledge with [React](https://reactjs.org/) is desirable.

## Prerequisites

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.8.0 or higher**)
- [Node.js](https://nodejs.org/) - **version 12 or later** (check the version with `node -v`)

## Getting started

1. Bootstrap the app with [create-react-app](https://facebook.github.io/create-react-app/)

   ```sh
   npx create-react-app my-app
   ```

2. Install the `ui5-webcomponents-react` npm module

   ```sh
   npm install @ui5/webcomponents-react --save
   ```

3. Create your root component `MyApp.jsx` and add it to your `src/App.js`

   ```jsx
   import React from "react";

   export function MyApp() {
     return <div>My root component</div>;
   }
   ```

4. Make your App able to consume `ui5-webcomponents-react` components

   In your `src/App.js` file import the `ThemeProvider`

   ```jsx
   import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
   ```

   Then wrap your application's root component inside of the `ThemeProvider`

   ```jsx
   return (
     <div>
       <ThemeProvider withToastContainer>
         <MyApp />
       </ThemeProvider>
     </div>
   );
   ```

5. Launch the app to start developing

    ```sh
    npm start
    ```

## Storybook

You can find **all** available components in the [Storybook](https://sap.github.io/ui5-webcomponents-react/?path=/story/welcome-getting-started--page)<br/>

There you can try out the different components and also take a look at the coding and the available props.

## First step - create a Button component

Inside of your `MyApp.jsx` file import the Button component.

```jsx
import { Button } from "@ui5/webcomponents-react/lib/Button";
```

_You could import all components also from `@ui5/webcomponents-react` directly, but this will have a negative impact on your bundle size._

Now you can add the Button to your `MyApp` component.

```jsx
return (
  <>
    <Button onClick={() => alert("Hello World")}>My Button</Button>
  </>
);
```

The button can receive different `props`. We added `onClick` to make the button actually do something when clicked.<br/>
For a different design you can use the `design` prop, to render [sap-icons](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons) inside of the button use the `icon` prop, etc.
<br/>You can take a look at all props on the [Storybook](https://sap.github.io/ui5-webcomponents-react/?path=/story/welcome-getting-started--page)

## Second Step - Chart Library

UI5 Webcomponents for React also comes with a Chart library.

1.  Install the npm module:

    ```sh
    npm install @ui5/webcomponents-react --save
    ```

2.  Now we will use our Button we previously implemented and make it change chart types by clicking on it.  
    At first we need to add the charts to our component, for this example we'll use a bar-chart and a line-chart component.

        ```jsx
        import { BarChart } from "@ui5/webcomponents-react-charts/lib/BarChart";
        import { LineChart } from "@ui5/webcomponents-react-charts/lib/LineChart";
        ```

3.  Add the LineChart

    ```jsx
    <>
      <Button onClick={() => alert("Hello World")}>My Button</Button>
      <LineChart />
    </>
    ```

    Well, that didn't change much, didn't it? It's because the chart didn't receive any data, and therefore the content is empty.

4.  Add the following lines to your component:

    ```jsx
    const datasets = [
      {
        label: "Stock Price",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ];
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ];
    ```

5.  Now add datasets and labels to your LineChart component.

    ```jsx
    <LineChart datasets={datasets} labels={labels} />
    ```

    Congratulation, you implemented your first Chart component.

6.  Now we will add a BarChart underneath the LineChart.
    We want the same data just with a different representation, so we use the same labels and datasets as we did with the LineChart.

        ```jsx
        <>
          <Button onClick={() => alert("Hello World")}>My Button</Button>
          <LineChart datasets={datasets} labels={labels} />
          <BarChart datasets={datasets} labels={labels} />
        </>
        ```

        Great! Two charts are rendered now.

7)  To make the charts toggle on Button click, we need to add some logic to our component.
    First we'll add a state. It should control which chart is going to be rendererd.
    We will use the [State Hook logic](https://reactjs.org/docs/hooks-state.html) to implement the state and set `"lineChart"` as default value.

        ```jsx
        const [toggleCharts, setToggleCharts] = useState("lineChart");
        ```

8)  The button which was added in the first Step, needs to set the state corresponding to the chart we want to render.
    So we will add a function that handles this logic.

        ```jsx
        const handleButtonClick = () => {
          if (toggleCharts === "lineChart") {
            setToggleCharts("barChart");
          } else {
            setToggleCharts("lineChart");
          }
        };
        ```

        And attach it to the `onClick` prop of the Button.

        ```jsx
        <Button onClick={handleButtonClick}>Toggle between charts</Button>
        ```

9)  To only render the current chart, we add the following lines to the render of the component:

    ```jsx
    return (
      <>
        <Button onClick={handleButtonClick}>Toggle between charts</Button>
        {toggleCharts === "line-chart" ? (
          <LineChart datasets={datasets} labels={labels} />
        ) : (
          <BarChart datasets={datasets} labels={labels} />
        )}
      </>
    );
    ```

## Third Step - Building a Dashboard

Now to take things further, we will build an analytical dashboard with many components.

1.  Add the following imports to your component

    ```jsx
    import "@ui5/webcomponents/dist/icons/add.js";
    import { ShellBar } from "@ui5/webcomponents-react/lib/ShellBar";
    import { ShellBarItem } from "@ui5/webcomponents-react/lib/ShellBarItem";
    import { Card } from "@ui5/webcomponents-react/lib/Card";
    import { List } from "@ui5/webcomponents-react/lib/List";
    import { StandardListItem } from "@ui5/webcomponents-react/lib/StandardListItem";
    import { ValueState } from "@ui5/webcomponents-react/lib/ValueState";
    import { ProgressIndicator } from "@ui5/webcomponents-react/lib/ProgressIndicator";
    import { Title } from "@ui5/webcomponents-react/lib/Title";
    import { TitleLevel } from "@ui5/webcomponents-react/lib/TitleLevel";
    import { FlexBox } from "@ui5/webcomponents-react/lib/FlexBox";
    import { FlexBoxJustifyContent } from "@ui5/webcomponents-react/lib/FlexBoxJustifyContent";
    import { FlexBoxWrap } from "@ui5/webcomponents-react/lib/FlexBoxWrap";
    import { FlexBoxDirection } from "@ui5/webcomponents-react/lib/FlexBoxDirection";
    import { Table } from "@ui5/webcomponents-react/lib/Table";
    import { TableColumn } from "@ui5/webcomponents-react/lib/TableColumn";
    import { TableRow } from "@ui5/webcomponents-react/lib/TableRow";
    import { TableCell } from "@ui5/webcomponents-react/lib/TableCell";
    import { Text } from "@ui5/webcomponents-react/lib/Text";
    ```

2.  Then continue with adding a `ShellBar` to the Component.
    For the `logo` and `profile` prop I used example images. You can also use a url or path to your own images.

        ```jsx
        <ShellBar
          logo={"reactLogo.png"}
          profile={"profilePictureExample.png"}
          primaryTitle={"My App"}
        >
          <ShellBarItem src="sap-icon://add" text="Add" />
        </ShellBar>
        ```

        As you can see, the `ShellBar` gets a `ShellBarItem` as child, which will be rendered on the right side of the component.
        Also if we want to use `sap-icons` we have to import them manually as you can see in the imports above.

3.  Now we will build our first tile of the Dashboard. Use the charts we implemented earlier and wrap them inside of a `Card` component.

    ```jsx
    <Card heading="Stock Price" subtitle="Charts" style={{ width: "300px" }}>
      <Button onClick={handleButtonClick}>Toggle between charts</Button>
      {toggleCharts === "lineChart" ? (
        <LineChart datasets={datasets} labels={labels} />
      ) : (
        <BarChart datasets={datasets} labels={labels} />
      )}
    </Card>
    ```

    And with this, the first tile is finished.

4.  The second tile should have a `List` with different Items as content. Again, start with adding a `Card` component.
    As child of the `Card` we add the `List` and also the `StandardListItem`.

        ```jsx
        <List>
          <StandardListItem>Activity 1</StandardListItem>
        </List>
        ```

    The user should know the status of the activities, so we add the `info` prop to the `StandardListItem`. To visualize if the status is neutral, positive or negative, we also add the `infoState` prop.

        ```jsx
          <StandardListItem info="finished" infoState={ValueState.Success}>
            Activity 1
          </StandardListItem>
          <StandardListItem info="failed" infoState={ValueState.Error}>
            Activity 2
          </StandardListItem>
        ```

    Now we will add two more activities, one that is almost finished and one which has just started.
    For this we need the `ProgressIndicator` and `Title` component. The `Title` receives the `level` prop, it is working like the corresponding HTML elements.
    The `ProgressIndicator` is given four props:

    - `displayValue`: The label of the indicator
    - `precentValue`: The actual value, which indicates the progress
    - `width`: The width of the indicator
    - `state`: The value-state (color) of the indicator

        ```jsx
          <StandardListItem info="in progress" infoState={ValueState.Warning}>
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
          <StandardListItem info="in progress" infoState={ValueState.Warning}>
            <Title level={TitleLevel.H5}>Activity 3</Title>
            <ProgressIndicator
              displayValue="5%"
              percentValue={5}
              width="180px"
              state={ValueState.Error}
            />
          </StandardListItem>
        ```

    Now the components are shown but they don't fit inside the row and overflow.
    To fix this we first adjust the height of the `StandardListItem`. We add a `style` prop to the component to use the default [React inlineStyle syntax](https://reactjs.org/docs/dom-elements.html) and then wrap our `Title` and `ProgressIndicator` inside of a `FlexBox` component.
    The `FlexBox` implements most of the [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) behavior without being forced to actually use CSS or other styling methods. The FlexBox

    The finished `Card` component should now look like this:

        ```jsx
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
        ```

5.  In the last tile we will show a `Table` component. Again we create a `Card` to wrap the Table.

    ```jsx
    <Card heading="Table">
      <Table></Table>
    </Card>
    ```

    Now we need to add the `column` prop to the table, otherwise no table header is rendered.

    ```jsx
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
    ...
    return(
    ...
      <Card heading="Table">
        <Table column={tableColumns}></Table>
      </Card>
    ```

    To fill the table with `TableRows` and `TableCells` import these components and use them as children of the `Table`.
    There should be the same count of `TableCells` in each `TableRow` as there are `TableColumns`

    ```jsx
    <Table
      column={tableColumns}
      style={{ maxWidth: "900px", minWidth: "400px" }}
    >
      <TableRow>
        <TableCell>
          <Label>Cell 1</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 2</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 3</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 4</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 5</Label>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Label>Cell 2.1</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 2.2</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 2.3</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 2.4</Label>
        </TableCell>
        <TableCell>
          <Label>Cell 2.5</Label>
        </TableCell>
      </TableRow>
    </Table>
    ```

    Now we use a FlexBox to wrap the dashboard content so we are able to center-align the tiles and make them wrap if there's not enough space in the row.

    ```jsx
     <FlexBox justifyContent={FlexBoxJustifyContent.Center} wrap={FlexBoxWrap.Wrap}>
        ...
     </FlexBox
    ```

    That was it. You created a dashboard in just a few steps and without adding much styling to the single components.
    Now your component should look like this:

    ```jsx
    import React, { useState } from "react";
    import { Button } from "@ui5/webcomponents-react/lib/Button";
    import { BarChart } from "@ui5/webcomponents-react-charts/lib/BarChart";
    import { LineChart } from "@ui5/webcomponents-react-charts/lib/LineChart";
    import { ShellBar } from "@ui5/webcomponents-react/lib/ShellBar";
    import { ShellBarItem } from "@ui5/webcomponents-react/lib/ShellBarItem";
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
    import "@ui5/webcomponents/dist/icons/add.js";

    export function Dashboard() {
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
      return (
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
        >
          <ShellBar
            logo={"reactLogo.png"}
            profile={"profilePictureExample.png"}
            primaryTitle={"My App"}
          >
            <ShellBarItem src="sap-icon://add" />
          </ShellBar>
          <div>
            <Card
              heading="Stock Price"
              subtitle="Charts"
              style={{ width: "300px", padding: "16px" }}
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
                <StandardListItem
                  info="finished"
                  infoState={ValueState.Success}
                >
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
          </div>
        </FlexBox>
      );
    }
    ```

## Fourth Step - Add Routing

Now, as the dashboard is finished we will create an empty `Detail` component and set up routing and navigation between the dashboard and `Detail`.

1. Create a `Detail.jsx` and a `Home.jsx` file under `src/`

2. Create the Detail component, that will return a `Title` to your liking and leave the `Home.jsx` file empty for now.

   ```jsx
   import React from "react";
   import { Title } from "@ui5/webcomponents-react/lib/Title";

   export function Detail() {
     return <Title>Hello World!</Title>;
   }
   ```

3. Install the `react-router-dom`

   ```sh
   npm install react-router-dom --save
   ```

4. Import `HashRouter` and Wrap your root component inside of it

   ```jsx
   import { HashRouter } from "react-router-dom";
   ```

   ```jsx
   <HashRouter>
     <ThemeProvider withToastContainer>
       <MyApp />
     </ThemeProvider>
   </HashRouter>
   ```

5. Go into your `Home.jsx` file and add an empty functional component to it.

   ```jsx
   import React from "react";

   function Home() {
     return null;
   }
   ```

6. Now we have some refactoring to do. First get into `MyApp.jsx`, extract everything except the `Shellbar` and move it to `Home.jsx`.  
   `MyApp.jsx` should now look like this:

   ```jsx
   function MyApp() {
     return (
       <ShellBar
         logo={"reactLogo.png"}
         profile={"profilePictureExample.png"}
         primaryTitle={"My App"}
       >
         <ShellBarItem src="sap-icon://add" />
       </ShellBar>
     );
   }
   ```

   And `Home.jsx` like this:

   ```jsx
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
   import "@ui5/webcomponents/dist/icons/add.js";

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
     return (
       <FlexBox
         justifyContent={FlexBoxJustifyContent.Center}
         wrap={FlexBoxWrap.Wrap}
       >
         <Card
           heading="Stock Price"
           subtitle="Charts"
           style={{ width: "300px", padding: "16px" }}
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
   ```

7. Import `Switch`, `Route` and `Redirect` from `react-router-dom` in `MyApp.jsx` and import the `Home` and `Detail` component.
   Now set up paths with `Switch` and the component displayed respectively.

   ```jsx
   import React from "react";
   import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
   import { Switch, Route, Redirect } from "react-router-dom";
   import { Home } from "./Home";
   import { Detail } from "./Detail";

   export function DashboardWithRouting() {
     return (
       <>
         <ShellBar
           logo={"reactLogo.png"}
           profile={"profilePictureExample.png"}
           primaryTitle={"My App"}
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
   ```

   You should get the `Home` component on the `/#/home` path and the `Detail` component on the `/#/detail` path.

8. Now we want to navigate to the `Detail` component by clicking on a `Card` header.  
    Go into your `Home` component and add `headerInteractive` and `onHeaderClick={handleHeaderClick}` to your first `Card` component.

   ```jsx
   <Card
       heading="Stock Price"
       subtitle="Charts"
       style={{ width: "300px", padding: "16px" }}
       headerInteractive
       onHeaderClick={handleHeaderClick}
     >
   ```

   Define the `handleHeaderClick` function as follow. And import the `useHistory` hook from `react-router-dom`

   ```jsx
   const history = useHistory();
   const handleHeaderClick = () => {
     history.push("/detail");
   };
   ```

   Great we can navigate to the `Details` component, but right now, there is no to go back except for the back-button of the browser.  
    Normally when you click on the Logo of the app, it should send you back to your `Home` screen. Let's implement that.

   Go into you `MyApp.jsx` file where your `ShellBar` is and add an `onLogoClick` prop to it. The function is almost the same as for the `onHeaderClick`, but this time we want to go to our default page.

   ```jsx
   const history = useHistory();
   const handleLogoClick = () => {
     history.push("./");
   };
   ```

   Your `ShellBar` should now look like this:

   ```jsx
   <ShellBar
     logo={"reactLogo.png"}
     profile={"profilePictureExample.png"}
     primaryTitle={"My App"}
     onLogoClick={handleLogoClick}
   >
     <ShellBarItem src="sap-icon://add" />
   </ShellBar>
   ```

## Fifth Step - Styling: Custom styles and Custom Components

### Changing the style for existing components:

You can change the appearance of the Web Components by using [CSS Variables](https://www.w3schools.com/Css/css3_variables.asp). Per default, the Fiori 3 theme parameters are injected into the document head as CSS Variables. If you want to change e.g. the color of all texts, you can do that by creating another style element with the following content:

```html
<style>
  --sapUiBaseText: limegreen;
</style>
```

As a consequence, all HTML Elements in the subtree where this style was applied are now displaying their texts in `limegreen` instead of `#32363a` which would be the default value for Fiori 3. You can change CSS Variables on any level - in the head, or on every single element by using either CSS classes or element style.

A full list of all supported CSS Variables can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/master/packages/base/src/styling/sap_fiori_3.ts) or in the [SAPUI5 Theming Parameters Toolbox](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/theming/webapp/index.html).

### Style your own components

if you want to add a custom component to your app, but still want to use the styling approach of the UI5 Web Components. You can hook into the theming by using [react-jss](https://cssinjs.org/react-jss/?v=v10.0.0)

1. Install `react-jss`

   ```sh
   npm install react-jss
   ```

2. Create a custom component under `./src` with following content:

   ```jsx
   import React from "react";
   import { createUseStyles } from "react-jss";

   const styles = ({ parameters }) => ({
     container: {
       backgroundColor: parameters.sapUiGlobalBackgroundColor,
       fontFamily: parameters.sapUiFontFamily,
       height: "50px",
       display: "flex",
       justifyContent: "center",
       alignItems: "center"
     },
     text: {
       color: parameters.sapUiNegativeText,
       fontSize: parameters.sapUiFontHeader1Size
     }
   });

   const useStyles = createUseStyles(styles);

   export const MyCustomElement = () => {
     const classes = useStyles();

     return (
       <div className={classes.container}>
         <span className={classes.text}>My custom Text Element</span>
       </div>
     );
   };
   ```

   When using the jss styling functions, the function will be called with an object with three properties:

   ```jsx
   {
    theme: 'the current theme as string, e.g. "sap_fiori_3"',
    parameters: "object with all styling parameters, please check the CSS Variables link.",
    contentDensity: 'Current Content Density mode, either "Compact" or "Cozy".'
   }
   ```

3. Add the custom component to your `Home` component.

   ```jsx
    return (
       <FlexBox
         justifyContent={FlexBoxJustifyContent.Center}
         wrap={FlexBoxWrap.Wrap}
       >
         <MyCustomElement />
      ...
   ```

   Now you can see, that the element has the same `fontFamily` and uses the same semantic colors as the UI5 Webcomponents for React
