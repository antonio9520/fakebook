import * as React from "react";
import {
  Container,
  ContainerStoryReel,
  styleContainerVideoChat,
  styleChipVideoChat,
  styleAvatarVideoChat,
} from "./styles";
import { Box, Avatar, Button } from "@mui/material";
import { Story, CardAddStory, MessageSender, Post } from "components";
import { dataStories } from "assets/constant";
import { VideoCall } from "@mui/icons-material";

const StoryReel = () => {
  return (
    <ContainerStoryReel>
      <CardAddStory />
      {dataStories.map((item, index) => (
        <Story
          key={index}
          profileURL={item.profileURL}
          imageURL={item.imageURL}
          username={item.username}
        />
      ))}
    </ContainerStoryReel>
  );
};

const VideoChat = () => {
  return (
    <Box sx={styleContainerVideoChat}>
      <Button
        sx={styleChipVideoChat}
        startIcon={
          <VideoCall sx={{ color: "#A34DB2", width: "28px", height: "28px" }} />
        }
        variant="text"
      >
        Crear sala
      </Button>
      {dataStories.map((item, index) => (
        <Avatar key={index} sx={styleAvatarVideoChat} src={item.profileURL} />
      ))}
    </Box>
  );
};
const Feed = () => {
  return (
    <Container>
      <StoryReel />
      <MessageSender />
      <VideoChat />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
