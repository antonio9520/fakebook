import * as React from "react";
import {
  Container,
  ContainerStoryReel,
  styleContainerVideoChat,
} from "./styles";
import { Box, Avatar, Chip } from "@mui/material";
import { Story, CardAddStory, MessageSender } from "components";
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
      <Chip icon={<VideoCall sx={{ color: "#894AA8" }} />} label="Crear sala" />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </Box>
  );
};
const Feed = () => {
  return (
    <Container>
      <StoryReel />
      <MessageSender />
      <VideoChat />
    </Container>
  );
};

export default Feed;
