import { Box } from "@mui/material";
import React from "react";

const AuthenrizeLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Box display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
     className="bg-neutral01 mx-10 my-5 h-screen rounded-2xl">
      {children}
    </Box>
  );
};

export default AuthenrizeLayout;
