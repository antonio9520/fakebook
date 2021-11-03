import React from "react";
import {
  Container,
  styleContainerVideoChat,
  styleChipVideoChat,
  styleAvatarVideoChat,
  styleContainer,
  styleContainerStoryReel,
} from "./styles";
import { Box, Avatar, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Story, CardAddStory, MessageSender, Post } from "components";
import { dataStories } from "assets/constant";
import { VideoCall } from "@mui/icons-material";
import useResizeArray from "hooks/useResizeArray";

const Feed: React.FC = () => {
  const theme = useTheme();
  const isXsBreakPoint = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmBreakPoint = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdBreakPoint = useMediaQuery(theme.breakpoints.only("md"));
  const isLgBreakPoint = useMediaQuery(theme.breakpoints.only("lg"));
  const numMaxListItems = isXsBreakPoint
    ? 3
    : isSmBreakPoint
    ? 4
    : isMdBreakPoint
    ? 4
    : isLgBreakPoint
    ? 4
    : 5;
  const Stories = useResizeArray(dataStories, 0, numMaxListItems);
  const _dataStories = Stories;

  const StoryReel: React.FC = () => {
    return (
      <Box sx={styleContainerStoryReel}>
        <CardAddStory />
        {_dataStories.map((item, index) => (
          <Story
            key={index}
            profileURL={item.profileURL}
            imageURL={item.imageURL}
            username={item.username}
          />
        ))}
      </Box>
    );
  };

  const VideoChat: React.FC = () => {
    return (
      <Box sx={styleContainerVideoChat}>
        <Button
          sx={styleChipVideoChat}
          startIcon={
            <VideoCall
              sx={{ color: "#A34DB2", width: "28px", height: "28px" }}
            />
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

  return (
    <Box sx={styleContainer}>
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
    </Box>
  );
};

export default Feed;
