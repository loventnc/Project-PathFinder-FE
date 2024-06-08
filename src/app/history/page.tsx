import {
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const HistoryPage: React.FC = () => {
  const results = [
    { date: "18 เมษายน 2567", title: "นักธุรกิจ" },
    { date: "15 เมษายน 2567", title: "นักธุรกิจ" },
    { date: "29 มีนาคม 2567", title: "นักธุรกิจ" },
    { date: "29 มีนาคม 2567", title: "นักธุรกิจ" },
    { date: "28 มีนาคม 2567", title: "นักธุรกิจ" },
    { date: "21 มีนาคม 2567", title: "นักธุรกิจ" },
    { date: "17 มีนาคม 2567", title: "นักธุรกิจ" },
    { date: "12 มีนาคม 2567", title: "นักธุรกิจ" },
    { date: "05 มีนาคม 2567", title: "นักธุรกิจ" },
  ];

  return (
    <Box sx={{ backgroundColor: "#E5F1FB", minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
          maxWidth: "100%",
          mx: 8,
          p: 4,
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h5" className="font-bold" color="primary">
              ประวัติผลลัพธ์
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" endIcon={<SwapVertIcon />}>
              ล่าสุด
            </Button>
          </Grid>
        </Grid>
        <List>
          {results.map((result, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItemAvatar>
                <Avatar alt="Result Icon" src="/path/to/icon.png" />
              </ListItemAvatar>
              <ListItemText primary={result.title} />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ ml: "auto" }}
              >
                {result.date}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default HistoryPage;
