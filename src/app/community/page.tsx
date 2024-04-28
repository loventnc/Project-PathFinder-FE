"use client";
import React from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CardCommunity from "./components/CardCommunity";
import { CommunityInterface } from "@/interface/CommunityInterface";

const CommunityPage = () => {
  const [communityData, setCommunityData] = useState([]);

  const fetchCommunityData = async () => {
    try {
      const response = await axiosInstance.get("/api/user/post/getpost");
      setCommunityData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommunityData();
  });

  return (
    <>
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
            ชุมชุน แลกเปลี่ยนและพูดคุย
          </Typography>
        </Grid>
      </Grid>
      <Box
        component={"div"}
        className="grid grid-cols-3 justify-items-center gap-y-10 my-5 py-5"
      >
        {communityData.map((data: CommunityInterface, index: number) => {
          return <CardCommunity key={index} communityData={data} />;
        })}
      </Box>
    </>
  );
};

export default CommunityPage;
