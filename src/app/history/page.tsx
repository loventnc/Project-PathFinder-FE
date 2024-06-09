"use client";

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, List, Divider } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import HistoryItem from "./component/HistoryItem";
import { JobListInterface } from "@/interface/JobListInterface";

const Historypage = () => {
  const [historyData, setHistoryData] = useState<JobListInterface[]>([]);
  const router = useRouter();

  const fetchHistoryData = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/user/quizz/getresultByUserID"
      );
      setHistoryData(response.data);
    } catch (error) {
      console.error("Error fetching user history data:", error);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  console.log(historyData);

  return (
    <Box sx={{ backgroundColor: "#E5F1FB", minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
          maxWidth: "100%",
          mx: 5,
          p: 4,
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              variant="h5"
              className="font-bold font-noto"
              color="primary"
            >
              ประวัติผลลัพธ์
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              className="font-noto"
              endIcon={<SwapVertIcon />}
            >
              ล่าสุด
            </Button>
          </Grid>
        </Grid>
        <Divider
          sx={{ my: 2, backgroundColor: "#4D4D4D" }}
          className="font-noto"
        />
        <List className="font-noto">
          {historyData.map((item, index: number) => (
            <HistoryItem
              key={index}
              title={item.jobID?.jobTitle}
              date={item.datePrdict}
              photo={item.jobID?.Image}
              id={item._id}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Historypage;
