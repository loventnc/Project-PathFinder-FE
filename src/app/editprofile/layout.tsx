import React from "react";
import { Box } from "@mui/material";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className="bg-neutral01 mx-10 my-5 py-40 h-auto rounded-2xl font-noto"
    >
      {children}
    </Box>
  );
};

export default layout;
