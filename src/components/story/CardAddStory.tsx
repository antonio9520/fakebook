import * as React from "react";
import {
  ContainerImage,
  ContainerAddStory,
  OverlayAddStory,
  styleBottomCard,
  styleContainerIcon,
} from "./style";
import { IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CardAddStory = () => {
  return (
    <ContainerAddStory>
      <ContainerImage
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s288-p-rw-no)`,
        }}
      />

      <Box sx={styleBottomCard}>
        <Box sx={styleContainerIcon}>
          <IconButton
            size="small"
            sx={{ backgroundColor: "primary.main", color: "white" }}
          >
            <AddIcon />
          </IconButton>
        </Box>

        <h5>Crea una historia</h5>
      </Box>
      <OverlayAddStory />
    </ContainerAddStory>
  );
};

export default CardAddStory;
