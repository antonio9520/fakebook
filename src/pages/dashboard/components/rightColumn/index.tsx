import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {
  Container,
  CustomScroll,
  ImagenCardGroup,
  styleContainerCard,
  styleHeaderCardGroup,
  styleContainerDescription,
  styleButtonCardGroup,
  IconButtonCloseCardGroup,
} from "./styles";
import { Group, Close } from "@mui/icons-material";

const CardGroup = () => {
  return (
    <Box sx={styleContainerCard} position="relative">
      <Box sx={styleHeaderCardGroup}>
        <Group fontSize="small" color="primary" />
        <span>Group</span>
        <span>· Sugerencias para ti</span>
      </Box>
      <ImagenCardGroup
        src={
          "https://www.telam.com.ar/advf/imagenes/2020/07/5f0eda4144b65_1004x566.jpg"
        }
      />
      <Box sx={styleContainerDescription}>
        <h4>Repartidores de Aplicaciones en Chile 🇨🇱</h4>
        <h5>32 mil miembros · 100 publicaciones al dia </h5>
      </Box>
      <Button fullWidth sx={styleButtonCardGroup} variant="text">
        Unirte al grupo
      </Button>
      <IconButtonCloseCardGroup>
        <IconButton>
          <Close />
        </IconButton>
      </IconButtonCloseCardGroup>
    </Box>
  );
};

const RightColumn = () => {
  return (
    <Container>
      <CustomScroll>
        <CardGroup />
      </CustomScroll>
    </Container>
  );
};

export default RightColumn;
