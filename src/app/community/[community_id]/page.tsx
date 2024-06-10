"use client";
import React from "react";
import { useParams } from "next/navigation";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState, useEffect } from "react";
import {
  CommunityInterface,
  CommentInterface,
} from "@/interface/CommunityInterface";
import Image from "next/image";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { List, ListItem } from "@mui/joy";
import PropComment from "../components/PropComment";
import SendIcon from "@mui/icons-material/Send";
import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ModelUpdate from "../components/ModelUpdate";

const CommunitypageByID = () => {
  const { community_id } = useParams();
  const router = useRouter();
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [statusOwner, setStatusOwner] = useState<boolean>(false);
  const [comment, setComment] = useState({
    PostID: community_id,
    comment: "",
  });
  const [communityDataByID, setCommunityDataByID] =
    useState<CommunityInterface>();
  const fecthCommunityByID = async () => {
    try {
      const res = await axiosInstance.get(
        `/api/user/post/getpostbyid?PostID=${community_id}`
      );
      setCommunityDataByID(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkOwnerPost = async () => {
    try {
      await axiosInstance
        .get(`/api/user/post/checkowner/${community_id}`)
        .then((res) => {
          setStatusOwner(res.data.status);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    checkOwnerPost();
    fecthCommunityByID();
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axiosInstance
      .post("/api/user/post/createcomment", comment)
      .then((res) => {
        setComment({
          PostID: community_id,
          comment: "",
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AlertDelete = () => {
    Swal.fire({
      title: "คุณต้องการลบโพสต์นี้หรือไม่",
      showDenyButton: true,
      confirmButtonText: `ลบ`,
      denyButtonText: `ยกเลิก`,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePost();
        Swal.fire("ลบโพสต์สำเร็จ", "", "success");
        router.push("/community");
      } else if (result.isDenied) {
        Swal.fire("ยกเลิกการลบ", "", "info");
      }
    });
  };

  const handleDeletePost = async () => {
    try {
      await axiosInstance
        .delete(`/api/user/post/deletepost?PostID=${community_id}`)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const day = dayjs(communityDataByID?.dateCreate).format("DD/MM/YYYY");

  return (
    <>
      <Box className="w-full h-[300px]">
        <Image
          src={communityDataByID?.PostImage ?? ""}
          alt="postImage"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
          objectFit="cover"
        />
      </Box>
      <Box py={5} px={5}>
        <Grid container spacing={2} className=" border-b-2">
          <Grid item md={11} display={"grid"} gap={2} height={"auto"}>
            <Typography
              variant="h3"
              className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-noto"
            >
              {communityDataByID?.PostTitle}
            </Typography>
            <Typography className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-noto">
              {communityDataByID?.descriptionPost}
            </Typography>
          </Grid>
          <Grid item md={1}>
            <Typography className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-noto">
              {communityDataByID?.OwnerID.firstname}
            </Typography>
            <Typography className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-noto">
              {day}
            </Typography>
            <Grid item md={1}>
              {statusOwner && (
                <div className="flex gap-y-4">
                  <h1 onClick={handleOpenModal}>
                    <EditIcon className=" text-primary" />
                  </h1>
                  <h1 onClick={AlertDelete}>
                    <DeleteIcon className="text-neutral04" />
                  </h1>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <List
            className="
  flex 
  w-full 
  gap-y-2 
  sm:gap-y-4 
  md:gap-y-5 
  lg:gap-y-6 
  xl:gap-y-8"
          >
            <Typography className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-noto">
              ความคิดเห็นทั้งหมด
            </Typography>
            {communityDataByID?.Comments &&
              communityDataByID?.Comments.length > 0 &&
              communityDataByID?.Comments.map((item, index) => (
                <ListItem
                  key={index}
                  className="text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-noto w-full"
                >
                  <PropComment
                    OwnerID={item.OwnerID}
                    comment={item as CommentInterface}
                  />
                </ListItem>
              ))}
          </List>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            className="bg-neutral02 border-2 border-neutral-950 rounded-2xl mt-2"
          >
            <TextField
              className="w-full"
              placeholder="แสดงความคิดเห็นของคุณ"
              variant="standard"
              type="text"
              name="comment"
              value={comment.comment}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <Button type="submit">
              <SendIcon />
            </Button>
          </Box>
        </form>
      </Box>

      <ModelUpdate
        open={openModal}
        handleClose={handleCloseModal}
        PostTitle={communityDataByID?.PostTitle}
        descriptionPost={communityDataByID?.descriptionPost}
      />
    </>
  );
};

export default CommunitypageByID;
