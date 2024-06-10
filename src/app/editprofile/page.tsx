"use client";

import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import Image from "next/image";
import badnner from "@/asset/img/editprofile.svg";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { userInterface } from "@/interface/CommunityInterface";
import { log } from "console";

const EditProfilepage = () => {
  const [userData, setUserData] = useState<userInterface>();
  const [editData, setEditData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put("/api/user/editprofile", editData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const res = await axiosInstance.get("/api/user/getuserbyid");
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData);

  return (
    <Grid container>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        md={6}
      >
        <Box>
          <Image src={badnner} alt="banner" />
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        direction={"column"}
        md={6}
        width={"100%"}
        paddingRight={"5%"}
        gap={5}
      >
        <Box className=" text-primary font-noto">
          <Typography
            variant="h3"
            className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold font-noto"
          >
            แก้ไขโปรไฟล์
          </Typography>
          <Typography
            variant="h5"
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-noto"
          >
            สามารถปรับเปลี่ยนข้อมูลของคุณได้ที่นี่
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-y-7 font-noto"
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                className="font-noto"
                id="outlined-basic"
                label="ชื่อจริง"
                defaultValue={userData?.firstname}
                placeholder="ชื่อจริง"
                name="firstname"
                variant="outlined"
                type="text"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} className="font-noto">
              <TextField
                className="font-noto"
                id="outlined-basic"
                label="นามสกุล"
                defaultValue={userData?.lastname}
                placeholder="นามสกุล"
                name="lastname"
                variant="outlined"
                type="text"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            className="font-noto"
            id="outlined-basic"
            label="ชื่อผู้ใช้"
            defaultValue={userData?.username}
            placeholder="ชื่อผู้ใช้"
            name="username"
            variant="outlined"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            className="font-noto"
            id="outlined-basic"
            label="อีเมล"
            placeholder="อีเมล"
            defaultValue={userData?.email}
            name="email"
            variant="outlined"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            className="font-noto"
          >
            <Typography
              variant="h6"
              className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] font-noto"
            >
              เปลี่ยนแปลงข้อมูล
            </Typography>
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default EditProfilepage;
