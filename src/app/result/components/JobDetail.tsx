import React from "react";
import { Box, Typography } from "@mui/material";
import { List, ListItem } from "@mui/joy";

interface JobDetailProps {
  OneDayDo: string[];
  skills: { skill: string; descriptoionskill: string }[];
}

const JobDetail = ({ OneDayDo, skills }: JobDetailProps) => {
  return (
    <>
      <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={10}>
        <Box>
          <Typography
            variant="h5"
            className="font-bold text-primary border-b-2 border-primary w-fit font-noto"
          >
            ในแต่ละวันทำอะไรบ้าง
          </Typography>
          <Box>
            {OneDayDo?.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography variant="h6" className="font-noto">
                    {`${index + 1}. ${item}`}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            className="font-bold text-primary border-b-2 border-primary w-fit font-noto"
          >
            ทักษะที่ควรมี
          </Typography>
          <Box>
            <List marker="disc">
              {skills?.map((item, index) => {
                return (
                  <ListItem key={index} nested>
                    <ListItem>
                      <Typography variant="h6" className="font-bold font-noto">
                        {item.skill}
                      </Typography>
                    </ListItem>
                    <List marker="none">
                      <ListItem className="font-noto">
                        {item.descriptoionskill}
                      </ListItem>
                    </List>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobDetail;
