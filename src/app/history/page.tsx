"use client";

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, List, Divider } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import HistoryItem from "./component/HistoryItem";

const Historypage = () => {
  const [historyData, setHistoryData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/user/quizz/getresultByUserID"
        );
        console.log("Fetched data:", response.data);
        setHistoryData(response.data);
      } catch (error) {
        console.error("Error fetching user history data:", error);
      }
    };

    fetchHistoryData();
  }, []);

  if (historyData.length === 0) {
    return <Typography>Loading...</Typography>;
  }

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
            <Typography variant="h5" className="font-bold" color="primary">
              ประวัติผลลัพธ์
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" endIcon={<SwapVertIcon />}>
              ล่าสุด
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, backgroundColor: "#4D4D4D" }} />
        <List>
          {historyData.map((item, index) => (
            <HistoryItem key={index} item={item} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Historypage;
