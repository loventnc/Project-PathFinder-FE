"use client";
import React from "react";
import { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import Image from "next/image";
import badnner from "@/asset/img/image 1.svg";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const VerifyOPTpage = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axiosInstance.post("/api/user/verifyotp", {
      OTP: OTP,
    }).then((res) => {
      console.log(res);
      router.push("/authenrize/forgetpassword/changepassword");
    });
  };

  const handleSubmitResendOTP = () => {
    const email = localStorage.getItem("email");
    axiosInstance
      .post("/api/user/sendemail", { emailUser: email })
      .then((res) => {
        console.log(res);
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
                label="OTP"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                name="OTP"
                placeholder="OTP"
                required
                onChange={(e) => setOTP(e.target.value)}
              />
              <Button variant="contained" fullWidth type="submit" size="large">
                <Typography>ยืนยันรหัส</Typography>
              </Button>
              <Button variant="outlined" fullWidth  size="large"
              onClick={handleSubmitResendOTP}>
                <Typography>ขอรหัสอีกครั้ง</Typography>
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default VerifyOPTpage;
