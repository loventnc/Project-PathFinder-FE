import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CommunityInterface } from "@/interface/CommunityInterface";
import dayjs from "dayjs";
import Link from "next/link";

const CardCommunity = ({
  communityData,
}: {
  communityData: CommunityInterface;
}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className=" rounded-3xl w-full">
      <Link href={`/community/${communityData._id}`} className="w-full">
        <CardMedia
          sx={{ height: 300 ,width : 300 }}
          image={communityData.PostImage}
          title="post image"
          className="rounded-3xl my-5 mx-5"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {communityData.PostTitle}
          </Typography>
        </CardContent>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={2}
          py={3}
        >
          <Typography variant="body2" color="text.secondary">
            {communityData.OwnerID.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dayjs(communityData.dateCreate).format("DD/MM/YYYY")}
          </Typography>
        </Box>
      </Link>
    </Card>
  );
};

export default CardCommunity;
