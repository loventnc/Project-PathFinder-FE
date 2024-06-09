"use client";

import React from 'react'
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material'
import Image from 'next/image'
import badnner from '@/asset/img/editprofile.svg'
import { useState , useEffect } from 'react';
import { axiosInstance } from '@/lib/axiosInstance';

const EditProfilepage = () => {

  const [editData, setEditData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  });


  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put("/api/user/editprofile", editData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  

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
        <Box className=" text-primary">
          <Typography variant="h3" className="font-bold">
            แก้ไขโปรไฟล์
          </Typography>
          <Typography variant="h5">สามารถปรับเปลี่ยนข้อมูลของคุณได้ที่นี่</Typography>
        </Box>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-y-7"
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="ชื่อจริง"
                placeholder="ชื่อจริง"
                name="firstname"
                variant="outlined"
                type="text"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="นามสกุล"
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
            id="outlined-basic"
            label="ชื่อผู้ใช้"
            placeholder="ชื่อผู้ใช้"
            name="username"
            variant="outlined"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="อีเมล"
            placeholder="อีเมล"
            name="email"
            variant="outlined"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth size="large">
            <Typography variant="h6">สมัครใช้งาน</Typography>
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default EditProfilepage
