"use client";

import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
import badnner from "@/asset/img/image 1.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Signuppage = () => {
  const router = useRouter();

  const educationArr: string[] = ["ประถมศึกษา", "มัธยมศึกษา", "ปวช.", "ปวส."];

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    education_level: "",
    school: "",
    birthDate: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    await axiosInstance
      .post("/api/user/register", user)
      .then(async () => {
        window.location.reload();
        await router.push("/", { scroll: false });
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Typography
            variant="h3"
            className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold font-noto"
          >
            Sign Up
          </Typography>
          <Typography
            variant="h5"
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-noto"
          >
            สร้างบัญชีของคุณตอนนี้
          </Typography>
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
                className="font-noto"
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>ระดับการศึกษา</InputLabel>
                <Select
                  className="font-noto"
                  fullWidth
                  label="ระดับการศึกษา"
                  placeholder="ระดับการศึกษา"
                  value={user.education_level}
                  name="education_level"
                  onChange={handleChange}
                >
                  {educationArr.map((education: string, index: number) => (
                    <MenuItem key={index} value={education}>
                      {education}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="โรงเรียน"
                placeholder="โรงเรียน"
                name="school"
                variant="outlined"
                type="text"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="วันเกิด"
              className="w-full"
              onChange={(newValue: any) => {
                setUser({
                  ...user,
                  birthDate: dayjs(newValue as dayjs.Dayjs).format(
                    "YYYY-MM-DD"
                  ),
                });
              }}
            />
          </LocalizationProvider>
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
          <Box width={"100%"}>
            <TextField
              id="outlined-basic"
              label="รหัสผ่าน"
              variant="outlined"
              name="password"
              placeholder="รหัสผ่าน"
              onChange={handleChange}
              type="password"
              fullWidth
            />
          </Box>
          <Button type="submit" variant="contained" fullWidth size="large">
            <Typography
              variant="h6"
              className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] font-noto"
            >
              สมัครใช้งาน
            </Typography>
          </Button>
        </form>
        <Link href="/authenrize/login" className="flex justify-center gap-x-2">
          <Typography
            variant="h6"
            className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-primary font-noto"
          >
            มีบัญชีอยู่แล้ว?
          </Typography>
          <Typography
            variant="h6"
            className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-primary font-bold font-noto"
          >
            เข้าสู่ระบบ
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Signuppage;
