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

const CommunitypageByID = () => {
  const { community_id } = useParams();
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

  useEffect(() => {
    

    fecthCommunityByID();
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  console.log(communityDataByID);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axiosInstance
      .post("/api/user/post/createcomment", comment)
      .then((res) => {
        setComment(
          {
            PostID: community_id,
            comment: "",
          }
        )
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <Typography variant="h3">{communityDataByID?.PostTitle}</Typography>
            <Typography>{communityDataByID?.descriptionPost}</Typography>
          </Grid>
          <Grid item md={1}>
            <Typography>{communityDataByID?.OwnerID.firstname}</Typography>
          </Grid>
        </Grid>
        <Box>
          <List className="flex gap-y-5 w-full">
            <Typography>ความคิดเห็นทั้งหมด</Typography>
            {communityDataByID?.Comments &&
              communityDataByID?.Comments.length > 0 &&
              communityDataByID?.Comments.map((item, index) => (
                <ListItem key={index} className="w-full">
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
              placeholder="แสดงความคิดเห็นของคุณ"
              className="w-full"
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
    </>
  );
};

export default CommunitypageByID;
