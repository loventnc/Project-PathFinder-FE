"use client"
import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const AuthenrizeLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter()

  const fetchUserdata = async () => {
    try {
      const response = await axiosInstance.get("/api/user/getuserbyid");
      const { data, status } = response;
      if (status === 200 && data?.message !== "Unauthorized") {
        router.push("/")
      }
    } catch (error: any) {
      console.log(error.response?.status);
    }
  };


  useEffect(()=>{
    fetchUserdata()
  })

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className="bg-neutral01 mx-10 my-5 py-40 h-auto rounded-2xl"
    >
      {children}
    </Box>
  );
};

export default AuthenrizeLayout;
