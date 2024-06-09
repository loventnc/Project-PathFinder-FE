"use client";
import React from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CardCommunity from "./components/CardCommunity";
import { CommunityInterface } from "@/interface/CommunityInterface";
import Image from "next/image";
import logoCommunity from "@/asset/img/Screenshot_2024-03-31_221126-transformed 1.svg";
import AddIcon from "@mui/icons-material/Add";
import ModalComunityPost from "./components/ModalComunityPost";

const CommunityPage = () => {
  const [communityData, setCommunityData] = useState([]);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
  }, [communityData]);

  return (
    <>
      <Grid
        container
        spacing={1}
        className="flex items-center justify-center py-10"
      >
        <Grid item xs={0}>
          <Box
            height={{
              xs: "30px",
              sm: "35px",
              md: "40px",
              lg: "45px",
            }}
            width={{
              xs: "4px",
              sm: "8px",
              md: "12px",
              lg: "15px",
            }}
            className="bg-accent01"
          ></Box>
        </Grid>
        <Grid item xs={10}>
          <Box className="flex gap-x-5 items-center font-noto">
            <Typography
              variant="h4"
              className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] font-bold text-primary font-noto"
            >
              ชุมชุน แลกเปลี่ยนและพูดคุย
            </Typography>
            <Box>
              <Image
                src={logoCommunity}
                width={55}
                height={68}
                alt="community"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0}>
          <Button
            variant="contained"
            className="font-noto"
            onClick={handleOpenModal}
          >
            <AddIcon />
          </Button>
          <ModalComunityPost open={openModal} handleClose={handleCloseModal} />
        </Grid>
      </Grid>
      <Box
        component="div"
        className="grid gap-y-10 my-5 py-5"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          justifyItems: "center",
        }}
      >
        {communityData.map((data: CommunityInterface, index: number) => {
          return <CardCommunity key={index} communityData={data} />;
        })}
      </Box>
    </>
  );
};

export default CommunityPage;
