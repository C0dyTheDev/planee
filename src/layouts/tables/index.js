/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import avatar4 from "../../assets/images/avatar4.png";
import VuiBadge from "../../components/VuiBadge";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar1 from "../../assets/images/avatar1.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar6 from "../../assets/images/avatar6.png";
import {Checkbox} from "@mui/material";
import {CheckBox} from "@mui/icons-material";
import {light} from "@mui/material/styles/createPalette";
import checkbox from "../../assets/theme/components/form/checkbox";

import "./tables.css"
import linearGradient from "../../assets/theme/functions/linearGradient";
import Calendar from "../../components/Calendar";
import Grid from "@mui/material/Grid";
import React from "react";
import colors from "../../assets/theme/base/colors";
import LineChart from "../../examples/Charts/LineCharts/LineChart";
import {lineChartDataDashboard} from "../dashboard/data/lineChartData";
import {lineChartOptionsDashboard} from "../dashboard/data/lineChartOptions";

function Tasks() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const { columns, rows } =
      {
    columns: [
        { name: "done", align: "left" },
        { name: "name", align: "left" },
        { name: "tags", align: "center" },
        { name: "startDate", align: "center" },
        { name: "dueDate", align: "center" },
    ],

    rows: [
        {
            done: <Checkbox size={"large"} defaultChecked={true} className={"checkbox"}></Checkbox>,
            name: <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">Math Test</VuiTypography>,
            tags: (
                <VuiBadge
                    variant="standard"
                    badgeContent="School"
                    color="success"
                    size="xs"
                    container
                    sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
                        background: success.main,
                        border: `${borderWidth[1]} solid ${success.main}`,
                        borderRadius: borderRadius.md,
                        color: white.main,
                    })}
                />
            ),
            startDate: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    24/03/19
                </VuiTypography>
            ),
            dueDate: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    23/04/19
                </VuiTypography>
            ),
        },
        {
            done: <Checkbox size={"large"} defaultChecked={false} className={"checkbox"}></Checkbox>,
            name:
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Working on UUR
                </VuiTypography>,
            tags: (
                <>
                <VuiBadge
                    variant="standard"
                    badgeContent="School"
                    color="success"
                    size="xs"
                    container
                    sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
                        background: success.main,
                        border: `${borderWidth[1]} solid ${success.main}`,
                        borderRadius: borderRadius.md,
                        color: white.main,
                    })}
                /> <> </>
                <VuiBadge
                    variant="standard"
                    badgeContent="Work"
                    color="error"
                    size="xs"
                    container
                    sx={({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
                        background: error.main,
                        border: `${borderWidth[1]} solid ${error.main}`,
                        borderRadius: borderRadius.md,
                        color: white.main,
                    })}
                /></>
            ),
            startDate: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    24/03/16
                </VuiTypography>
            ),
            dueDate: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    23/04/20
                </VuiTypography>
            ),
        },
        {
            done: <Checkbox size={"large"} defaultChecked={true} className={"checkbox"}></Checkbox>,
            name:
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Meeting with Tam
                </VuiTypography>,
            tags: (
                <>
                    <VuiBadge
                        variant="standard"
                        badgeContent="Other"
                        color="success"
                        size="xs"
                        container
                        sx={({ palette: { white, info }, borders: { borderRadius, borderWidth } }) => ({
                            background: info.main,
                            border: `${borderWidth[1]} solid ${info.main}`,
                            borderRadius: borderRadius.md,
                            color: white.main,
                        })}
                    />
                </>
            ),
            startDate: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    24/03/25
                </VuiTypography>
            ),
            dueDate: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    23/04/25
                </VuiTypography>
            ),
        },
    ],
  };
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
        <VuiBox py={3} height="1145px">
        <VuiBox mb={3}>
            <Grid container spacing={3}>
                <Grid  item xs={12} lg={6} xl={6}>
                    <Card>
                        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
                            <VuiTypography variant="lg" color="white">
                                Your Tasks
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox
                            sx={{
                                "& th": {
                                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                        `${borderWidth[1]} solid ${grey[700]}`,
                                },
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                            `${borderWidth[1]} solid ${grey[700]}`,
                                    },
                                },
                            }}
                        >
                            <Table columns={columns} rows={rows} />
                        </VuiBox>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6} xl={5}>
                    <Card>
                        <VuiBox>
                            <VuiBox
                                mb="24px"
                                sx={{
                                    background: linearGradient(
                                        cardContent.main,
                                        cardContent.state,
                                        cardContent.deg
                                    ),
                                    borderRadius: "20px",
                                }}
                            >
                                <Calendar/>
                            </VuiBox>
                        </VuiBox>
                    </Card>
                </Grid>
            </Grid>
            </VuiBox>
        </VuiBox>
    </DashboardLayout>
  );
}

export default Tasks;
