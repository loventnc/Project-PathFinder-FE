"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { axiosInstance } from "@/lib/axiosInstance";
import { userInterface } from "@/interface/CommunityInterface";
import logoPath from "@/asset/img/Rectangle 60.svg";

const Navbar = () => {
  const [user, setUser] = useState<userInterface | undefined>(undefined);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
  }, []);

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

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="หน้าหลัก" />
        </ListItem>
        <ListItem button component={Link} href="/predict">
          <ListItemText primary="แบบทดสอบ" />
        </ListItem>
        <ListItem button component={Link} href="/history">
          <ListItemText primary="ผลลัพธ์" />
        </ListItem>
        <ListItem button component={Link} href="/community">
          <ListItemText primary="ชุมชน" />
        </ListItem>
        {isLogin && (
          <>
            <ListItem button component={Link} href="/editprofile">
              <PersonOutlineOutlinedIcon className="mr-2" />
              <ListItemText primary={user?.username} />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="ออกจากระบบ" />
            </ListItem>
          </>
        )}
        {!isLogin && (
          <>
            <ListItem button component={Link} href="/authenrize/login">
              <ListItemText primary="เข้าสู่ระบบ" />
            </ListItem>
            <ListItem button component={Link} href="/authenrize/signup">
              <ListItemText primary="สมัครใช้งาน" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <Box className="bg-neutral01 flex items-center justify-between px-10 mx-10 my-5 rounded-xl h-14 font-noto">
      <Box className="flex h-full items-center">
        <Image
          src={logoPath}
          alt="logo"
          className="w-[40px] h-[28px] sm:w-[48px] sm:h-[32px] md:w-[64px] md:h-[48px]"
        />
        <Typography
          variant="h5"
          className="text-[12px] md:text-[16px] lg:text-[24px] font-bold font-noto"
        >
          PathFinder
        </Typography>
      </Box>
      <Box className="hidden lg:flex gap-10 items-center text-lg font-noto">
        <Link
          href="/"
          className="hover:text-primary01 active:text-primary01 focus:text-primary01"
        >
          หน้าหลัก
        </Link>
        <Link
          href="/predict"
          className="hover:text-primary01 focus:text-primary01"
        >
          แบบทดสอบ
        </Link>
        <Link
          href="/history"
          className="hover:text-primary01 focus:text-primary01"
        >
          ผลลัพธ์
        </Link>
        <Link
          href="/community"
          className="hover:text-primary01 focus:text-primary01"
        >
          ชุมชน
        </Link>
        {isLogin && (
          <Box className="flex items-center font-noto">
            <Link
              href="/editprofile"
              className="flex flex-row focus:text-primary01"
            >
              <PersonOutlineOutlinedIcon className="mr-2" />
              <Typography variant="body1" className="font-noto">
                {user?.username}
              </Typography>
            </Link>
          </Box>
        )}
        {!isLogin && (
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
        {isLogin && (
          <Button variant="text" className="font-noto" onClick={handleLogout}>
            ออกจากระบบ
          </Button>
        )}
      </Box>
      <IconButton
        className="lg:hidden"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navbar;
