import React from "react";
import { Box, Typography } from "@mui/material";
import {
  CommentInterface,
  userInterface,
} from "@/interface/CommunityInterface";

const PropComment = ({
  OwnerID,
  comment,
}: {
  OwnerID: userInterface;
  comment: CommentInterface;
}) => {
  return (
    <>
      <Box className=" bg-neutral02 w-fit pr-12 pl-4 py-3 rounded-2xl ">
        <Typography
          variant="h6"
          className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px]  font-semibold"
        >
          {OwnerID.username}
        </Typography>
        <Typography
          variant="body1"
          className="text-[8px] sm:text-[10px] md:text-[12px]"
        >
          {comment.comment}
        </Typography>
      </Box>
    </>
  );
};

export default PropComment;
