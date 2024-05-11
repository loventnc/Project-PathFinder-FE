"use client";
import React from "react";
import { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import Image from "next/image";
import badnner from "@/asset/img/image 1.svg";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const ForgetPassWordpage = () => {
  const router = useRouter();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axiosInstance.post("/api/user/sendemail", { emailUser : email }).then((res) => {
            console.log(res);
            localStorage.setItem("email", email);
            router.push("/authenrize/forgetpassword/verifyopt");
        });
    };


  return (
    <>
      <Grid container className="h-full p-10" >
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
                label="อีเมล"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                placeholder="อีเมล"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="contained" fullWidth type="submit" size="large">
                <Typography>ขอรหัสผ่านอีกครั้ง</Typography>
              </Button>
            <Link href="/login" className="flex justify-center text-primary">
              <Typography>กลับหน้าเข้าสู่ระบบ</Typography>
            </Link>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgetPassWordpage;
