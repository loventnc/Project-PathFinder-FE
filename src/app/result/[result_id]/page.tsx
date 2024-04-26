"use client";
import React from "react";
import { useParams } from "next/navigation";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState, useEffect } from "react";
import { ResultInterface } from "@/interface/QuizzInterface";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import CardJob from "../components/CardJob";
import JobDetail from "../components/JobDetail";

const ResultPage = () => {
  const params = useParams<{ result_id: string }>();
  const [result, setResult] = useState<ResultInterface>({} as ResultInterface);

  const getResult = async (result_id: string) => {
    try {
      const res = await axiosInstance.get(
        `/api/user/quizz/getresult/${result_id}`
      );
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult(params.result_id);
  }, []);

  const job = result.jobID;


  return (
    <div>
     <Grid container 
     paddingX={{ xs: 2, md: 14 }}
      paddingY={{ xs: 2, md: 2 }}
      >
        <Grid item xs={12} md={7} display="flex" justifyContent="center" >
          <CardJob jobTitle={job?.jobTitle} jobImage={job?.Image} jobDescription={job?.description} />
        </Grid>
        <Grid item xs={12} md={5}>
          <JobDetail skills={job?.skills} OneDayDo={job?.OneDayDo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ResultPage;
