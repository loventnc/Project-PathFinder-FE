import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const ResultLayout = function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className="bg-neutral01 mx-10 my-5 h-screen items-center">
      <Grid
        container
        spacing={1}
        className="flex items-center justify-center py-10"
      >
        <Grid item xs={0}>
          <Box height={54} width={12} className="bg-accent01"></Box>
        </Grid>
        <Grid item xs={11} className="flex justify-between">
          <Typography variant="h4" className="font-bold text-primary">
            ผลลัพธ์
          </Typography>
          <Link href="/history">
            <Typography variant="h6" className="flex items-center">
              ประวัติผลลัพธ์ <ArrowForwardIosIcon />
            </Typography>
          </Link>
        </Grid>
      </Grid>
      {children}
    </Box>
  );
};

export default ResultLayout;
