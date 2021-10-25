import * as React from "react";
import { Box, ListItemButton, ListItemIcon, Icon, Avatar } from "@mui/material";
import {
  styleListItem,
  styleContainer,
  CustomScroll,
  UserName,
  Bottom,
  ContainerLinks,
} from "./styles";
import { List, ListItem, Divider, Link } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { itemsSidebar, Items } from "../constants";

const ItemsSidebar = ({ items }: { items: Items }) => {
  const [itemsList, setItemsList] = React.useState<Items>(items);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const textSeeMore = isOpen ? "Ver menos" : "Ver más";

  React.useEffect(() => {
    if (!isOpen) {
      const _items: Items = [];
      for (let i = 0; i < 9; i++) {
        _items.push(items[i]);
      }
      setItemsList(_items);
    } else {
      setItemsList(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const openList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {itemsList.map(({ icon, title }, index) => (
        <ListItem key={index} sx={styleListItem}>
          <ListItemButton sx={{ height: 56 }}>
            <ListItemIcon sx={{ position: "relative" }}>
              <Icon fontSize="large">{icon}</Icon>
            </ListItemIcon>
            <h5>{title}</h5>
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem sx={styleListItem}>
        <ListItemButton sx={{ height: 56 }} onClick={openList}>
          <ListItemIcon sx={{ position: "relative" }}>
            <Icon
              fontSize="large"
              sx={{ backgroundColor: "primary.grey", borderRadius: 15 }}
            >
              <KeyboardArrowDownRounded
                fontSize="large"
                sx={{ transform: isOpen ? "rotate(180deg)" : "inherit" }}
              />
            </Icon>
          </ListItemIcon>
          <h5>{textSeeMore}</h5>
        </ListItemButton>
      </ListItem>
    </>
  );
};

const ItemProfile = () => {
  return (
    <ListItem sx={styleListItem}>
      <ListItemButton sx={{ height: 56 }}>
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c" />
        <UserName>Abraham Vidal</UserName>
      </ListItemButton>
    </ListItem>
  );
};

const Links = () => {
  return (
    <ContainerLinks>
      <Link href="#" color="inherit" underline="hover">
        Privacidad
      </Link>
      <span> · </span>
      <Link href="#" color="inherit" underline="hover">
        Condiciones
      </Link>
      <span> · </span>
      <Link href="#" color="inherit" underline="hover">
        Publicidad
      </Link>
      <span> · </span>
      <Link href="#" color="inherit" underline="hover">
        Opciones de anuncios
      </Link>
      <span> · </span>
      <Link href="#" color="inherit" underline="hover">
        Cookies
      </Link>
      <span> · </span>
      <Link href="#" color="inherit" underline="hover">
        Más
      </Link>
      <span> · Fakebook &copy; 2021</span>
    </ContainerLinks>
  );
};

const Sidebar = () => {
  return (
    <Box sx={styleContainer}>
      <CustomScroll>
        <List sx={{ overflow: "visible" }}>
          <ItemProfile />
          <ItemsSidebar items={itemsSidebar} />
        </List>
        <Divider variant="middle" />
        <Bottom>
          <h4>bottom</h4>
          <Links />
        </Bottom>
      </CustomScroll>
    </Box>
  );
};

export default Sidebar;
