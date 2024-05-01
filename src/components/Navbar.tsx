"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logoPath from "@/asset/img/Rectangle 60.svg";
import Link from "next/link";
import { Button } from "@mui/material";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState, useEffect } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navbar = () => {
  const [user, setUser] = useState();

  const fetchUserdata = async () => {
    try {
      const response = await axiosInstance.get("/api/user/getuserbyid");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }; //ดึงข้อมูลผู้ใช้

  useEffect(() => {
    fetchUserdata();
  }, [user]);

  console.log(user);
  return (
    <Box className="bg-neutral01 flex items-center justify-between px-10 mx-10 my-5 rounded-xl h-14">
      <Box className="flex h-full items-center">
        <Image src={logoPath} alt="logo" />
        <Typography variant="h5" className="font-bold">
          PathFinder
        </Typography>
      </Box>
      <Box className="flex gap-10 items-center text-lg">
        <Link href="/">หน้าหลัก</Link>
        <Link href="/predict">แบบทดสอบ</Link>
        <Link href={""}>ผลลัพธ์</Link>
        <Link href={"/community"}>ชุมชน</Link>
        {!user ? (
          <>
            <Link href="/authenrize/login">
              <Button variant="contained">เข้าสู่ระบบ</Button>
            </Link>
            <Link href="/authenrize/signup">
              <Button variant="contained">สมัครใช้งาน</Button>
            </Link>
          </>
        ) : (
          <>
            <Box className="flex items-center ">
              <PersonOutlineOutlinedIcon className="mr-2" />
              <Typography variant="body1">{user.username}</Typography>
            </Box>
            <Link href="/profile"></Link>
            <Link href="/authenrize/logout">
              <Button variant="text">ออกจากระบบ</Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
