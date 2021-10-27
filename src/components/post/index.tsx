import React from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { Public, MoreHoriz } from "@mui/icons-material";
import {
  styleContainer,
  styleHeader,
  styleHeaderLeft,
  styleHeaderInfo,
  styleHeaderDate,
  styleDescription,
  styleMultimedia,
  ImagenPost,
} from "./styles";

const Post = () => {
  const Header = () => {
    return (
      <Box sx={styleHeader}>
        <Box sx={styleHeaderLeft}>
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c" />
          <Box sx={styleHeaderInfo}>
            <Typography fontSize={15} fontWeight={600}>
              Daddy Yankee
            </Typography>
            <Box style={styleHeaderDate}>
              <Typography fontSize={13}>25 de octubre a las 20:12 ·</Typography>
              <Public sx={{ width: "15px", marginLeft: "2px" }} />
            </Box>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const Multimedia = () => {
    return (
      <Box sx={styleMultimedia}>
        <ImagenPost
          src={
            "https://www.wallpapertip.com/wmimgs/186-1861067_beautiful-sky-mobile-phone-wallpaper-makes-people-want.jpg"
          }
        />
      </Box>
    );
  };
  const Description = () => {
    return (
      <Box sx={styleDescription}>
        <Typography lineHeight={1.3} fontSize={15}>
          Hay muchas situaciones incómodas que se podrían evitar con un poco de
          honestidad. Un curioso y honesto mensaje en un vehículo de transporte
          privado se viralizó en las últimas horas. Todo comenzó cuando un
          usuario de Twitter decidió utilizar sus redes sociales para felicitar
          a un conductor que puso un llamativo letrero en su vehículo: "no
          hable". "Me tocó el mejor Uber", escribió el usuario, llenándose
          rápidamente de likes y comentarios. Sin duda, a muchas personas no les
          gusta conversar durante sus viajes. ¿Eres una de ellas? 👀
        </Typography>
      </Box>
    );
  };
  return (
    <Box sx={styleContainer}>
      <Header />
      <Description />
      <Multimedia />
      {/**post info */}
      {/**actionBar */}

      <h1>post</h1>
    </Box>
  );
};

export default Post;
