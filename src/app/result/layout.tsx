import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const ResultLayout = function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      className="bg-neutral01 mx-10 my-5 h-screen items-center "
      borderRadius={4}
    >
      <Grid
        container
        spacing={1}
        className="flex items-center justify-center py-10"
      >
        <Grid item xs={0}>
          <Box
            height={{
              xs: "30px",
              sm: "35px",
              md: "40px",
              lg: "45px",
            }}
            width={{
              xs: "4px",
              sm: "8px",
              md: "12px",
              lg: "15px",
            }}
            className="bg-accent01"
          ></Box>
        </Grid>
        <Grid item xs={11} className="flex justify-between ">
          <Typography
            variant="h4"
            className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] font-bold text-primary font-noto"
          >
            ผลลัพธ์
          </Typography>
          <Link href="/history">
            <Typography
              variant="h6"
              className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] flex items-center font-noto"
            >
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
