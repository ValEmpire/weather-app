import { Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const WeatherDetail = (props) => {
  const { name, value } = props;

  return (
    <Box display={"flex"} pb={1}>
      <Typography fontWeight={600} textTransform={"capitalize"}>
        {name} :
      </Typography>
      <Typography sx={{ ml: 1 }}>{value}</Typography>
    </Box>
  );
};

WeatherDetail.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
};

export default WeatherDetail;
