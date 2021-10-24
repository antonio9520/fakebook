import * as React from "react";
import { Container, ContainerStoryReel } from "./styles";
import { Story, CardAddStory, MessageSender } from "components";
import { dataStories } from "assets/constant";

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

const Feed = () => {
  return (
    <Container>
      <StoryReel />
      <MessageSender />
    </Container>
  );
};

export default Feed;
