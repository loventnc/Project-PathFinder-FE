"use client";
import React, { useEffect, useState, createContext } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { axiosInstance } from "@/lib/axiosInstance";
import { QuizzInterface } from "@/interface/QuizzInterface";
import PropQuizz from "./Components/PropQuizz";

export const QuizzContext = createContext<any>({});

const PredictPage = () => {
  const [data, setData] = useState<QuizzInterface[]>([]);
  let [choiseID, setChoiseID] = useState<string[]>([]);
  let [quizzID, setQuizzID] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [quizzperPage] = useState<number>(1);
  const indexOfLastQuizz = currentPage * quizzperPage;
  const indexOfFirstQuizz = indexOfLastQuizz - quizzperPage;
  const currentQuizz = data.slice(indexOfFirstQuizz, indexOfLastQuizz);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const fetchData = async () => {
    try {
      await axiosInstance.get("/api/user/quizz/getquizz").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const QuizzContex = {
    paginate,
    quizzID,
    setQuizzID,
    data,
    choiseID,
    setChoiseID,
    quizzperPage,
    totalQuizz: data.length,
    currentPage,
    currentQuizz,
  };

  return (
    <>
      {/* <Box className="bg-red-600 h-screen"> */}
        <Box className="bg-neutral01 mx-10 my-5 h-screen items-center">
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
          <QuizzContext.Provider value={QuizzContex}>
            <Box>
              <PropQuizz />
            </Box>
          </QuizzContext.Provider>
        </Box>
      {/* </Box> */}
    </>
  );
};

export default PredictPage;
