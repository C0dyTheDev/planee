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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import CircularProgress from "@mui/material/CircularProgress";
import VuiButton from "../../components/VuiButton";
import {IoPlay} from "react-icons/io5";
import "./pomotimer.css";
import ReferralTracking from "../../layouts/dashboard/components/ReferralTracking";
import React from "react";

function PomoTimer({ time }) {
  return (
    <Card className={"circularProgress"}>
        <VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant='determinate'
                value={69}
                size={window.innerWidth >= 1024 ? 350 : window.innerWidth >= 768 ? 290 : 350}
                color='primary'
            />
            <VuiBox
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <VuiTypography color='text' variant={"h1"} mb='4px' textGradient>
                        {time}
                    </VuiTypography>
                    <VuiButton variant={"gradient"} size={"large"} iconOnly={true} color={"info"}><IoPlay color={"white"} size={"large"}></IoPlay></VuiButton>
                </VuiBox>
            </VuiBox>
        </VuiBox>
    </Card>
  );
}

export default PomoTimer;
