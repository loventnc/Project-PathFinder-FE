import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logoPath from "@/asset/img/Rectangle 60.svg";
import Link from "next/link";
import {Button} from "@mui/material";

const Navbar = () => {
  return (
    <Box className="bg-neutral01 flex items-center justify-between px-10 mx-10 my-5 rounded-xl h-14">
      <Box className="flex h-full items-center">
        <Image src={logoPath} alt="logo" />
        <Typography variant="h5" className="font-bold">PathFinder</Typography>
      </Box>
      <Box className="flex gap-10 items-center text-lg">
        <Link href="/">หน้าหลัก</Link>
        <Link href="/predict">แบบทดสอบ</Link>
        <Link href={""}>ผลลัพธ์</Link>
        <Link href={""}>ชุมชน</Link>
        <Link href={""}>
            <Button variant="contained">เข้าสู่ระบบ</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
