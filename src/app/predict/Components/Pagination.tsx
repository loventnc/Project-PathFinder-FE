"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import { QuizzContext } from "../page";
import { useContext } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const Pagination = () => {
  const router = useRouter();
  const { totalQuizz, quizzperPage, paginate, currentPage, choiseID } = useContext(QuizzContext);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalQuizz / quizzperPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextQuizz = () => {
    pageNumbers.map((number) => {
      if (currentPage === totalQuizz) {
        axiosInstance.post("/api/user/quizz/predict", { choiseARR : choiseID }).then((res) => {
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
    <Box className="flex justify-between px-32">
      <Button onClick={handlePrevQuizz}>ย้อนกลับ</Button>
      <Button variant="contained" onClick={handleNextQuizz}>
        {currentPage === totalQuizz ? "ส่งคำตอบ" : "ถัดไป"}
      </Button>
    </Box>
  );
};

export default Pagination;
