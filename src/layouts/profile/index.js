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
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";
import {
    IoAnalytics, IoBrush, IoCalendar,
    IoFlower,
    IoGlobe,
    IoHeart,
    IoLogoUsd,
    IoPlanet,
    IoPlay,
    IoSparkles,
    IoSunny,
    IoTrendingUp,
    IoWater
} from "react-icons/io5";
import MiniStatisticsCard from "../../examples/Cards/StatisticsCards/MiniStatisticsCard";
import ThemeCard from "../../examples/Cards/InfoCards/ThemeCard";
import React from "react";

function Overview() {
  return (
    <DashboardLayout>
      <VuiBox mt={5} mb={3} height="1180px">
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
          mb={10}
        >
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
            <Grid
                item
                xs={12}
                xl={8}
                xxl={8}
            >
              <Grid container spacing={3}>
                  <Grid item
                        xs={12}
                        xl={4}
                        xxl={4}>
                      <MiniStatisticsCard
                          title={{ text: "Your points" }}
                          count="2305 points"
                          icon={{ color: "info", component: <IoLogoUsd size="22px" color="white" /> }}
                      />
                  </Grid>
                  <Grid item
                        xs={12}
                        xl={4}
                        xxl={4}>
                      <MiniStatisticsCard
                          title={{ text: "Total Completed Tasks" }}
                          count="452 tasks"
                          icon={{ color: "info", component: <IoCalendar size="22px" color="white" /> }}
                      />
                  </Grid>
                  <Grid item
                        xs={12}
                        xl={4}
                        xxl={4}>
                      <MiniStatisticsCard
                          title={{ text: "Daily Streak" }}
                          count="368 days"
                          icon={{ color: "info", component: <IoSparkles size="22px" color="white" /> }}
                      />
                  </Grid>
                  <Grid item
                        xs={12}
                        xl={4}
                        xxl={4}>
                      <MiniStatisticsCard
                          title={{ text: "Streak Bonus" }}
                          count="1.3x"
                          icon={{ color: "info", component: <IoTrendingUp size="22px" color="white" /> }}
                      />
                  </Grid>
                  <Grid item
                        xs={12}
                        xl={4}
                        xxl={4}>
                      <MiniStatisticsCard
                          title={{ text: "Themes Unlocked" }}
                          count="4 themes"
                          icon={{ color: "info", component: <IoBrush size="22px" color="white" /> }}
                      />
                  </Grid>

              </Grid>
            </Grid>
        </Grid>
          <Grid container spacing={2} xs={12} xl={3} xxl={12}>
              <Grid item>
                  <ThemeCard
                      title={"Purple"}
                      price={"Free"}
                      icon={<IoPlanet size="22px" color="white"/>}
                      variant={"outlined"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Green"}
                      price={"1500 points"}
                      icon={<IoWater size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Pink"}
                      price={"2000 points"}
                      icon={<IoHeart size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Yellow"}
                      price={"2300 points"}
                      icon={<IoFlower size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Orange"}
                      price={"3000 points"}
                      icon={<IoSunny size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Purple"}
                      price={"Free"}
                      icon={<IoPlanet size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Green"}
                      price={"1500 points"}
                      icon={<IoWater size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Pink"}
                      price={"2000 points"}
                      icon={<IoHeart size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Yellow"}
                      price={"2300 points"}
                      icon={<IoFlower size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Orange"}
                      price={"3000 points"}
                      icon={<IoSunny size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Purple"}
                      price={"Free"}
                      icon={<IoPlanet size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Green"}
                      price={"1500 points"}
                      icon={<IoWater size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Pink"}
                      price={"2000 points"}
                      icon={<IoHeart size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Yellow"}
                      price={"2300 points"}
                      icon={<IoFlower size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Orange"}
                      price={"3000 points"}
                      icon={<IoSunny size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Purple"}
                      price={"Free"}
                      icon={<IoPlanet size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Green"}
                      price={"1500 points"}
                      icon={<IoWater size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Pink"}
                      price={"2000 points"}
                      icon={<IoHeart size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Yellow"}
                      price={"2300 points"}
                      icon={<IoFlower size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Orange"}
                      price={"3000 points"}
                      icon={<IoSunny size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Purple"}
                      price={"Free"}
                      icon={<IoPlanet size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Green"}
                      price={"1500 points"}
                      icon={<IoWater size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Pink"}
                      price={"2000 points"}
                      icon={<IoHeart size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Yellow"}
                      price={"2300 points"}
                      icon={<IoFlower size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
              <Grid item>
                  <ThemeCard
                      title={"Orange"}
                      price={"3000 points"}
                      icon={<IoSunny size="22px" color="white"/>}
                      variant={"contained"}
                  />
              </Grid>
          </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Overview;
