"use client";
import React from "react";
import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import badnner from "@/asset/img/image 1.svg";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const ChagePassWordpage = () => {
    const router = useRouter();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault
    if (password.password !== password.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    axiosInstance.post("/api/user/changepassword", {
        email: localStorage.getItem("email"),
        password: password.password,
    }).then((res) => {
        console.log(res);
        localStorage.removeItem("email");
        router.push("/authenrize/login");
    });
  };


 
  

  return (
    <>
      <Grid container className="h-full p-10">
        <Grid item xs={6}>
          <Box className="flex justify-center h-full">
            <Image src={badnner} alt="banner" />
          </Box>
        </Grid>
        <Grid item xs={6} className=" w-full h-full flex  justify-center ">
          <Box className=" h-full w-full gap-y-5 flex flex-col justify-center">
            <Typography variant="h3" className="font-bold text-primary">
              ลืมรหัสผ่าน
            </Typography>
            <Typography variant="h5" className=" text-primary">
              ป้อนอีเมลของคุณเพื่อรับรหัสผ่านใหม่
            </Typography>
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
              <TextField
                label="รหัสผ่าน"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                name="password"
                placeholder="รหัสผ่าน"
                onChange={handleChange}
                required
              />
              <TextField
                label="ยืนยันรหัสผ่าน"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                name="confirmPassword"
                placeholder="ยืนยันรหัสผ่าน"
                onChange={handleChange}
                required
              />
              <Button variant="contained" fullWidth type="submit" size="large">
                <Typography>ยืนยันรหัส</Typography>
              </Button>
              {/* <Button variant="outlined" fullWidth  size="large"
              onClick={handleSubmitResendOTP}>
                <Typography>ขอรหัสอีกครั้ง</Typography>
              </Button> */}
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ChagePassWordpage;
