"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import { QuizzContext } from "../page";
import { useContext } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const Pagination = () => {
  const router = useRouter();
  const { totalQuizz, quizzperPage, paginate, currentPage, choiseID } =
    useContext(QuizzContext);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalQuizz / quizzperPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextQuizz = () => {
    pageNumbers.map((number) => {
      if (currentPage === totalQuizz) {
        axiosInstance
          .post("/api/user/quizz/predict", { choiseARR: choiseID })
          .then((res) => {
            router.push(`/result/${res.data.result}`);
            // console.log(res.data.result);
          });
        return false;
      }
      if (currentPage === number) {
        paginate(number + 1);
      }
    });
  };

  const handlePrevQuizz = () => {
    pageNumbers.map((number) => {
      if (currentPage === 1) {
        return false;
      }
      if (currentPage === number) {
        paginate(number - 1);
      }
    });
  };

  return (
    <Box className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-32 font-noto">
      <Button
        onClick={handlePrevQuizz}
        className="text-xs sm:text-sm md:text-base lg:text-lg font-noto w-full sm:w-auto mb-2 sm:mb-0 "
        sx={{ minHeight: "1rem", padding: "0.2rem" }}
      >
        ย้อนกลับ
      </Button>
      <Button
        variant="contained"
        onClick={handleNextQuizz}
        className="text-xs sm:text-sm md:text-base lg:text-lg font-noto w-full sm:w-auto"
        sx={{ minHeight: "1rem", padding: "0.2rem" }}
      >
        {currentPage === totalQuizz ? "ส่งคำตอบ" : "ถัดไป"}
      </Button>
    </Box>
  );
};

export default Pagination;
