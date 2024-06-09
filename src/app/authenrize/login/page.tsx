"use client";

import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import badnner from "@/asset/img/image 1.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
const Loginpage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axiosInstance
      .post("/api/user/login", user)
      .then(async () => {
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
        <Box className=" text-primary font-noto">
          <Typography variant="h3" className="font-bold font-noto">
            Welcome Back!
          </Typography>
          <Typography variant="h5" className="font-noto">
            ลงชื่อเข้าใช้บัญชีของคุณ
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-y-7"
        >
          <TextField
            className="font-noto"
            id="outlined-basic"
            label="ชื่อผู้ใช้"
            placeholder="ชื่อผู้ใช้"
            name="email"
            variant="outlined"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <Box width={"100%"}>
            <TextField
              className="font-noto"
              id="outlined-basic"
              label="รหัสผ่าน"
              variant="outlined"
              name="password"
              placeholder="รหัสผ่าน"
              onChange={handleChange}
              type="password"
              fullWidth
            />
            <Link
              href={""}
              className="flex text-sm justify-end text-neutral04 mt-3 font-noto"
            >
              <Typography className="font-noto">ลืมรหัสผ่าน?</Typography>
            </Link>
          </Box>
          <Button type="submit" variant="contained" fullWidth size="large">
            <Typography variant="h6" className="font-noto">
              เข้าสู่ระบบ
            </Typography>
          </Button>
        </form>
        <Link
          href="/authenrize/signup"
          className="flex justify-center gap-x-2"
          font-noto
        >
          <Typography variant="h6" className="text-primary font-noto">
            ยังไม่มีบัญชี?
          </Typography>
          <Typography variant="h6" className="text-primary font-bold font-noto">
            สมัครใช้งาน
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Loginpage;
