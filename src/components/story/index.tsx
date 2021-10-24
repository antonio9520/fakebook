import * as React from "react";
import { Container, styleAvatar, Overlay } from "./style";
import { Avatar } from "@mui/material";

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
    <Container
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Overlay />
      <Avatar sx={styleAvatar} src={profileURL} />
      <h5>{username}</h5>
    </Container>
  );
};

export default Story;
