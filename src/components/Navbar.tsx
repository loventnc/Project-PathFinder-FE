"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import logoPath from "@/asset/img/Rectangle 60.svg";
import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { axiosInstance } from "@/lib/axiosInstance";
import { userInterface } from "@/interface/CommunityInterface";

const Navbar = () => {
  const [user, setUser] = useState<userInterface | undefined>(undefined);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const fetchUserdata = async () => {
    try {
      const response = await axiosInstance.get("/api/user/getuserbyid");
      const { data, status } = response;
      if (status === 200 && data?.message !== "Unauthorized") {
        setUser(data);
      } else {
        setIsLogin(false);
        setUser(undefined);
      }
    } catch (error: any) {
      console.log(error.response?.status);
    }
  };

  useEffect(() => {
    fetchUserdata();
  },[]);

  useEffect(() => {
    setIsLogin(user !== undefined);
  }, [user]);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/user/logout");
      setIsLogin(false);
      setUser(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="bg-neutral01 flex items-center justify-between px-10 mx-10 my-5 rounded-xl h-14 font-noto">
      <Box className="flex h-full items-center">
        <Image src={logoPath} alt="logo" />
        <Typography variant="h5" className="font-bold font-noto">
          PathFinder
        </Typography>
      </Box>
      <Box className="flex gap-10 items-center text-lg font-noto ">
        <Link
          href="/"
          className="hover:text-primary01 active:text-primary01 focus:text-primary01 "
        >
          หน้าหลัก
        </Link>
        <Link
          href="/predict"
          className="hover:text-primary01 focus:text-primary01 "
        >
          แบบทดสอบ
        </Link>
        <Link
          href={"/history"}
          className="hover:text-primary01 focus:text-primary01"
        >
          ผลลัพธ์
        </Link>
        <Link
          href={"/community"}
          className="hover:text-primary01 focus:text-primary01"
        >
          ชุมชน
        </Link>

        {isLogin != false ? (
          <>
            <Box className="flex items-center font-noto focus:text-primary01">
              <Link
                href={"/editprofile"}
                className="flex flex-row focus:text-primary01"
              >
                <PersonOutlineOutlinedIcon className="mr-2  " />
                <Typography variant="body1" className="font-noto ">
                  {user?.username}
                </Typography>
              </Link>
            </Box>
            <Link href="/profile"></Link>
            <Button variant="text" className="font-noto" onClick={handleLogout}>
              ออกจากระบบ
            </Button>
          </>
        ) : (
          <>
            <Link href="/authenrize/login">
              <Button variant="contained" className="font-noto">
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link href="/authenrize/signup">
              <Button variant="contained" className="font-noto">
                สมัครใช้งาน
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
