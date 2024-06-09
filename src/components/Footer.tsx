import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary01",
        color: "neutral06",
        padding: "1rem",
        textAlign: "center",
      }}
      className="py-2 sm:py-4 md:py-6 lg:py-8"
    >
      <Typography
        variant="body2"
        gutterBottom
        className="font-noto text-[4px] sm:text-[6px] md:text-[8px] lg:text-[12px]"
      >
        @ 2024 PathFinder | CSS 234 Web Programming II
      </Typography>
    </Box>
  );
};

export default Footer;
