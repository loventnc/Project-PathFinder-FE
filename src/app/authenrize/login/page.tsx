"use client";

import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axiosInstance
      .post("/api/user/login", user)
      .then((res) => {
        router.push("/");
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
          <Typography variant="h3" className="font-bold">
            Welcome Back!
          </Typography>
          <Typography variant="h5">ลงชื่อเข้าใช้บัญชีของคุณ</Typography>
        </Box>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-y-7"
        >
          <TextField
            id="outlined-basic"
            label="ชื่อผู้ใช้"
            placeholder="ชื่อผู้ใช้"
            name="email"
            variant="outlined"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <Box
          width={"100%"}
          >
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
            <Link href={""} className="flex text-sm justify-end text-neutral04 mt-3">
                <Typography>
                    ลืมรหัสผ่าน?
                </Typography>
            </Link>
          </Box>
          <Button type="submit" variant="contained" fullWidth size="large">
            <Typography variant="h6">เข้าสู่ระบบ</Typography>
          </Button>
        </form>
        <Link href="" className="flex justify-center gap-x-2">
          <Typography variant="h6" className="text-primary">
            ยังไม่มีบัญชี?
          </Typography>
          <Typography variant="h6" className="text-primary font-bold">
            สร้างใช้งาน
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Loginpage;
