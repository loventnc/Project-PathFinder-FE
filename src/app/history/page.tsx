"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const Historypage = () => {
  const [historyData, setHistoryData] = useState([]);

  const router = useRouter();

  useEffect(() => {
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
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {item.photo ? (
                <ListItemAvatar>
                  <Avatar alt="Result Icon" src={item.photo} />
                </ListItemAvatar>
              ) : null}
              <ListItemText primary={item.title} />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ ml: "auto" }}
              >
                {item.date}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Historypage;
