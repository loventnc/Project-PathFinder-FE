import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface CardJobProps {
  jobTitle: string;
  jobImage: string;
  jobDescription: string;
}

const CardJob = ({ jobTitle, jobImage, jobDescription }: CardJobProps) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={{ xs: "6%", md: "80%" }}
        height={{ xs: "60%", md: "80%" }}
        className=" bg-secondary01 rounded-2xl gap-y-4 py-5 border-t-8 border-accent02"
      >
        <Typography
          variant="h6"
          className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-accent02 font-noto text-center"
        >
          ลักษณะอาชีพ
        </Typography>
        <Typography
          variant="h2"
          className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] font-bold  text-accent02 font-noto text-center"
        >
          {jobTitle}
        </Typography>
        <Box>
          <Image
            src={jobImage}
            alt="job_image"
            width={192}
            height={364}
            placeholder="empty"
            text-center
          />
        </Box>
        <Typography
          variant="h6"
          className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-accent02 text-lg font-noto"
        >
          {jobDescription}
        </Typography>
      </Box>
    </>
  );
};

export default CardJob;
