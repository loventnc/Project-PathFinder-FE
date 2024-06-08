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
        width={{ xs: "100%", md: "80%" }}
        height={{ xs: "100%", md: "100%" }}
        className=" bg-secondary01 rounded-2xl gap-y-10 py-5 border-t-8 border-accent02"
      >
        <Typography variant="h6" className=" text-accent02">
          ลักษณะอาชีพ
        </Typography>
        <Typography variant="h2" className=" font-bold  text-accent02">
          {jobTitle}
        </Typography>
        <Box>
          <Image
            src={jobImage}
            alt="job_image"
            width={192}
            height={364}
            placeholder="empty"
          />
        </Box>
        <Typography variant="h6" className=" text-accent02 text-lg">
          {jobDescription}
        </Typography>
      </Box>
    </>
  );
};

export default CardJob;
