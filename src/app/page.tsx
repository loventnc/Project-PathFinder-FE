
"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import home from "@/asset/img/homepic.svg";

const HomePage = () => {
  return (
    <Box
      bgcolor="#FFFFFF"
      borderRadius={4}
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mx={5}
      p={5}
    >
      <Grid container>
        {/* Left */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center" className="p-5">
            <Typography
              variant="h1"
              color="primary"
              className="text-[26px] sm:text-[40px] md:text-[60px] lg:text-[82px] font-bold font-noto"
            >
              PathFinder
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[24px] font-bold font-noto"
            >
              “สร้างเส้นทางสู่อนาคตที่สำคัญของคุณ”
            </Typography>
            <Box
              className="border-[1px] sm:border-[2px] md:border-[3px] lg:border-[4px]"
              textAlign="center"
              width="100%"
              mt={2}
              mb={4}
            ></Box>
            <Typography
              variant="body1"
              className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-accent02 font-noto"
            >
              ช่วยให้คุณสามารถสร้างเส้นทางสู่อนาคตที่แสนสำคัญของคุณได้อย่างมั่นใจ
              <br />
              เรามีแบบทดสอบที่สามารถทำให้คุณได้รับคำแนะนำที่น่าเชื่อถือในการเลือกอาชีพที่เหมาะสม
            </Typography>
            <Link href="/predict">
              <Button
                variant="contained"
                size="large"
                className="font-bold font-noto bg-accent01 hover:bg-accent02 mt-4
                 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-9
                 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5"
              >
                เริ่มทำแบบทดสอบ
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Right */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="p-5"
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
