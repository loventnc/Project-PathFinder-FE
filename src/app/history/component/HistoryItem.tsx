"use client";
import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface HistoryItemProps {
  id: string;
  title: string;
  date: string;
  photo?: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  title,
  date,
  photo,
  id,
}) => {
  const router = useRouter();
  return (
    <ListItem
      onClick={() => router.push(`/result/${id}`)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="font-noto"
    >
      {photo && (
        <ListItemAvatar className="font-noto">
          <Avatar alt="Result Icon" src={photo} />
        </ListItemAvatar>
      )}
      <ListItemText primary={title} className="font-noto" />
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ ml: "auto" }}
        className="font-noto"
      >
        {date}
      </Typography>
    </ListItem>
  );
};

export default HistoryItem;
