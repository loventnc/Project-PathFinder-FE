import { Box, Grid, Typography } from "@mui/material";

const QuizzLayout = function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      className="bg-neutral01 mx-10 my-5 h-screen items-center"
      borderRadius={4}
    >
      <Grid
        container
        spacing={1}
        className="flex items-center justify-center py-10"
      >
        <Grid item xs={0}>
          <Box height={54} width={12} className="bg-accent01"></Box>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h4" className="font-bold text-primary">
            แบบทดสอบค้นหาอาชีพที่เหมาะสม
          </Typography>
        </Grid>
      </Grid>
      {children}
    </Box>
  );
};
export default QuizzLayout;
