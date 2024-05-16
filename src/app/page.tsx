import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import home from "@/asset/img/homepic.svg"; // Import the image

const HomePage: React.FC = () => {
  return (
    <Box bgcolor="#FFFFFF" borderRadius={4}>
      <Grid container>
        {/* Left*/}
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          md={6}
        >
          <Box textAlign="center">
            <Typography variant="h1" color="primary" className="font-bold">
              PathFinder
            </Typography>
            <Typography variant="h5" color="primary" className="font-bold">
              “สร้างเส้นทางสู่อนาคตที่สำคัญของคุณ”
            </Typography>
            <Box
              textAlign="center"
              borderBottom="5px solid #B4BFCC"
              width="100%"
              mt={2}
              mb={4}
            ></Box>
            <Typography variant="body1" className="text-accent02">
              ช่วยให้คุณสามารถสร้างเส้นทางสู่อนาคตที่แสนสำคัญของคุณได้อย่างมั่นใจ
              <br />
              เรามีแบบทดสอบที่สามารถทำให้คุณได้รับคำแนะนำที่น่าเชื่อถือในการเลือกอาชีพที่เหมาะสม
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginTop: 16 }}
              className="font-bold"
            >
              เริ่มทำแบบทดสอบ
            </Button>
          </Box>
        </Grid>

        {/* Right */}
        <Grid
          display={"flex"}
          justifyContent={"center"}
          direction={"column"}
          md={6}
          width={"100%"}
          paddingRight={"5%"}
          gap={5}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image src={home} alt="home" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
