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
import VuiButton from "../../../../components/VuiButton";

function ThemeCard({ title, price, icon, variant}) {
  return (
    <Card
      sx={{
        height: "170px",
        width: "145px"
      }}
    >
      <VuiBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
        {icon}
        <VuiTypography fontWeight="bold" color="white">
          {title}
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox mb={1} lineHeight={1} alignItems={"center"}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            {price}
          </VuiTypography>
        </VuiBox>
        <VuiButton variant={variant} color="info" mb={10}>{variant === "outlined" ? "Selected" : "Select"}</VuiButton>
      </VuiBox>
    </Card>
  );
}

export default ThemeCard;
