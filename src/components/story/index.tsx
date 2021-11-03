import * as React from "react";
import { styleContainer, styleAvatar, Overlay } from "./style";
import { Avatar, Box } from "@mui/material";

const Story = ({
  imageURL,
  profileURL,
  username,
}: {
  imageURL: string;
  profileURL: string;
  username: string;
}) => {
  return (
    <Box sx={{ ...styleContainer, backgroundImage: `url(${imageURL})` }}>
      <Overlay />
      <Avatar sx={styleAvatar} src={profileURL} />
      <h5>{username}</h5>
    </Box>
  );
};

export default Story;
