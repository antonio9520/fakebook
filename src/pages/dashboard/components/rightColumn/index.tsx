import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Divider,
  List,
  ListItemButton,
  Avatar,
} from "@mui/material";
import {
  styleContainer,
  CustomScroll,
  ImagenCardGroup,
  styleContainerCard,
  styleHeaderCardGroup,
  styleContainerDescription,
  styleButtonCardGroup,
  IconButtonCloseCardGroup,
  styleHeaderContacts,
  styleButtonsHeaderContacts,
  styleDivider,
  styleTypoListItem,
  styleItemButton,
  styleAvatar,
  styleTypoTitleContact,
  styleContainerButtonNewMessage,
  styleButtonNewMessage,
  styleIconAddGroup,
  styleContainerIconAdd,
  styleTypoAddGroup,
} from "./styles";
import {
  Group,
  Close,
  VideoCall,
  Search,
  MoreHoriz,
  Edit,
  Add,
} from "@mui/icons-material";
import { itemsContacts } from "../constants";

const CardGroup: React.FC = () => {
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

const Contacts = () => {
  return (
    <Box>
      <Box sx={styleHeaderContacts}>
        <Typography sx={styleTypoTitleContact}>Contactos</Typography>
        <Box sx={styleButtonsHeaderContacts}>
          <IconButton size="small">
            <VideoCall fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <Search fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <MoreHoriz fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <List>
        {itemsContacts.map((item) => (
          <ListItemButton key={item.id} sx={styleItemButton}>
            <Avatar sx={styleAvatar} src={item.profileURL} />
            <Typography fontSize={"15px"} sx={styleTypoListItem}>
              {item.name}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

const GroupConversations = () => {
  return (
    <Box>
      <Typography sx={styleTypoTitleContact}>
        Conversaciones en grupo
      </Typography>
      <List>
        <ListItemButton sx={styleItemButton}>
          <Box sx={styleContainerIconAdd}>
            <Add fontSize="medium" sx={styleIconAddGroup} />
          </Box>
          <Typography fontSize={"15px"} sx={styleTypoAddGroup}>
            Crear nuevo grupo
          </Typography>
        </ListItemButton>
      </List>
    </Box>
  );
};

const RightColumn = () => {
  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        display: { xs: "none", sm: "none", md: "block", lg: "block" },
      }}
    >
      <Box sx={styleContainer}>
        <CustomScroll>
          <CardGroup />
          <Divider sx={styleDivider} />
          <Typography sx={styleTypoTitleContact}>Publicidad</Typography>
          <Divider sx={styleDivider} />
          <Contacts />
          <Divider sx={styleDivider} />
          <GroupConversations />
          <Box sx={styleContainerButtonNewMessage}>
            <IconButton size="large" sx={styleButtonNewMessage}>
              <Edit />
            </IconButton>
          </Box>
        </CustomScroll>
      </Box>
    </Box>
  );
};

export default RightColumn;
