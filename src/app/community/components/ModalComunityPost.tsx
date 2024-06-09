import React from "react";
import { Modal, Typography, Box, Grid, Button, TextField } from "@mui/material";
import { KeyboardBackspace, InsertPhoto } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import { axiosInstance } from "@/lib/axiosInstance";

const ModalComunityPost = ({
  open,
  handleClose,
}: {
  open: any;
  handleClose: any;
}) => {
  const [post, setPost] = useState({
    PostTitle: "",
    descriptionPost: "",
  });

  const [image, setImage] = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleImage = (e: any) => {
    const { files } = e.target;
    setImage(files[0]);
  };

  const formData = new FormData();
  formData.append("PostTitle", post.PostTitle);
  formData.append("descriptionPost", post.descriptionPost);
  if (image) {
    formData.append("file", image);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/api/user/post/createpost", formData);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box className=" bg-neutral01 rounded-2xl max-h-auto min-h-96 flex flex-col gap-y-10  p-10 m-10">
          <Grid container>
            <Grid item xs={1}>
              <Button onClick={handleClose}>
                <KeyboardBackspace />
              </Button>
            </Grid>
            <Grid item xs={10} className="flex justify-center font-noto">
              <Typography
                variant="h4"
                className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] font-bold font-noto"
              >
                สร้างโพสต์
              </Typography>
            </Grid>
          </Grid>
          <form
            className="flex flex-col gap-y-10 font-noto"
            onSubmit={handleSubmit}
          >
            <Box className=" bg-neutral02 font-noto">
              <TextField
                fullWidth
                id="outlined-basic"
                label="หัวข้อ"
                variant="outlined"
                name="PostTitle"
                onChange={handleChange}
              />
            </Box>
            <Box className=" bg-neutral02 h-auto rounded-2xl overflow-hidden p-5">
              <textarea
                className="w-full h-40 bg-neutral02"
                placeholder="เนื้อหา"
                name="descriptionPost"
                onChange={handleChange}
              />
              <Box className="w-full flex justify-center h-32">
                {image && (
                  <Image
                    className="w-auto h-auto"
                    src={URL.createObjectURL(image)}
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                  />
                )}
              </Box>
              <Button>
                <label>
                  <InsertPhoto />
                  <TextField type="file" hidden onChange={handleImage} />
                </label>
              </Button>
            </Box>
            <Box display={"flex"} justifyContent={"end"} gap={2}>
              <Button variant="outlined" onClick={handleClose}>
                ยกเลิก
              </Button>
              <Button variant="contained" type="submit">
                โพสต์
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComunityPost;
