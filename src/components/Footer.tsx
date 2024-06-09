import React from "react";
import { Box, Typography, Link } from "@mui/material";

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
    >
      <Typography variant="body2" gutterBottom>
        @ 2024 PathFinder | CSS 234 Web Programming II
      </Typography>
    </Box>
  );
};

export default Footer;
