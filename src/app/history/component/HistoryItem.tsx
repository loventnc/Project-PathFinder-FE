import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";

interface HistoryItemProps {
  item: {
    title: string;
    photo?: string;
    date: string;
  };
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {item.photo && (
        <ListItemAvatar>
          <Avatar alt="Result Icon" src={item.photo} />
        </ListItemAvatar>
      )}
      <ListItemText primary={item.title} />
      <Typography variant="body2" color="textSecondary" sx={{ ml: "auto" }}>
        {item.date}
      </Typography>
    </ListItem>
  );
};

export default HistoryItem;
