import React from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Link,
  Divider,
  Button,
} from "@mui/material";
import {
  Public,
  MoreHoriz,
  ThumbUp,
  ChatBubbleOutlineOutlined,
  ThumbUpOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  styleContainer,
  styleHeader,
  styleHeaderLeft,
  styleHeaderInfo,
  styleHeaderDate,
  styleDescription,
  styleMultimedia,
  ImagenPost,
  styleReactionInfo,
  styleReactionInfoLeft,
  styleReactionInfoRight,
  styleActionBar,
  styleDivider,
} from "./styles";

const Post: React.FC = () => {
  const Header: React.FC = () => {
    return (
      <Box sx={styleHeader}>
        <Box sx={styleHeaderLeft}>
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c" />
          <Box sx={styleHeaderInfo}>
            <Typography fontSize={15} fontWeight={600}>
              Daddy Yankee
            </Typography>
            <Box sx={styleHeaderDate}>
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

  const Description: React.FC = () => {
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

  const Multimedia: React.FC = () => {
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

  const ReactionsInfo: React.FC = () => {
    return (
      <Box sx={styleReactionInfo}>
        <Box sx={styleReactionInfoLeft}>
          <ThumbUp color="primary" fontSize="small" />
          <Typography>543</Typography>
        </Box>
        <Box sx={styleReactionInfoRight}>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ marginRight: 1 }}
          >
            203 comentarios
          </Link>
          <Link href="#" color="inherit" underline="hover">
            201 veces compartido
          </Link>
        </Box>
      </Box>
    );
  };

  const ActionBar: React.FC = () => {
    return (
      <Box sx={styleActionBar}>
        <Button startIcon={<ThumbUpOutlined />}>Me gusta</Button>
        <Button startIcon={<ChatBubbleOutlineOutlined />}>Comentar</Button>
        <Button startIcon={<ShareOutlined />}>Compartir</Button>
      </Box>
    );
  };
  return (
    <Box sx={styleContainer}>
      <Header />
      <Description />
      <Multimedia />
      <ReactionsInfo />
      <Divider sx={styleDivider} />

      <ActionBar />
    </Box>
  );
};

export default Post;
