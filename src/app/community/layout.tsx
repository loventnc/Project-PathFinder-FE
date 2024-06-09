import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Communitylayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Box
        marginX={10}
        marginY={5}
        className="bg-neutral01 mx-10 my-5 min-h-screen max-h-auto items-center rounded-2xl overflow-hidden font-noto"
      >
        {children}
      </Box>
    </>
  );
};

export default Communitylayout;
