import * as React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  Icon,
  Avatar,
  Button,
  List,
  ListItem,
  Divider,
  Link,
} from "@mui/material";
import {
  styleListItem,
  styleContainer,
  CustomScroll,
  UserName,
  Bottom,
  ContainerLinks,
  styleQuickAccess,
  styleHeaderQuickAccess,
  ImageQuickAccess,
  styleListItemButton,
} from "./styles";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { itemsSidebar, Items, dataLinks, LinksProps } from "../constants";
import { useResizeArray } from "hooks";

const ItemProfile = () => {
  return (
    <ListItem sx={styleListItem}>
      <ListItemButton sx={styleListItemButton}>
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c" />
        <UserName>Abraham Vidal</UserName>
      </ListItemButton>
    </ListItem>
  );
};

const ItemsSidebar = ({ items }: { items: Items }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const textSeeMore = isOpen ? "Ver menos" : "Ver más";
  const numMaxListItems = isOpen ? items.length : 9;
  const itemsSidebar = useResizeArray(items, 0, numMaxListItems);
  const itemsList: Items = itemsSidebar;

  const openList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {itemsList.map(({ id, icon, title }) => (
        <ListItem key={id} sx={styleListItem}>
          <ListItemButton sx={styleListItemButton}>
            <ListItemIcon>
              <Icon fontSize="large">{icon}</Icon>
            </ListItemIcon>
            <h5>{title}</h5>
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem sx={styleListItem}>
        <ListItemButton sx={styleListItemButton} onClick={openList}>
          <ListItemIcon>
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

const Links = ({ links }: { links: LinksProps }) => {
  return (
    <ContainerLinks>
      {links.map(({ id, url, title }) => (
        <React.Fragment key={id}>
          <Link href={url} color="inherit" underline="hover">
            {title}
          </Link>
          <span> · </span>
        </React.Fragment>
      ))}
      <span>Fakebook &copy; 2021</span>
    </ContainerLinks>
  );
};

const QuickAccessItem = () => (
  <Box sx={styleQuickAccess}>
    <Box sx={styleHeaderQuickAccess}>
      <h5>Tus accesos directos</h5>
      <Button variant="text" size="small">
        Editar
      </Button>
    </Box>
    <List sx={{ padding: 0 }}>
      <ListItem sx={styleListItem}>
        <ListItemButton sx={{ height: 56 }}>
          <ImageQuickAccess
            src={
              "https://www.latercera.com/resizer/ygGPmHgKPAmwdMBA2k8jb5FRVEU=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/UZUEBRPGT5HKXIBAPD2LPDDYRA.jpeg"
            }
          />
          <h5>Venta Instrumentos Musicales Bio Bio</h5>
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);
const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        display: { xs: "none", sm: "none", md: "none", lg: "block" },
      }}
    >
      <Box sx={styleContainer}>
        <CustomScroll>
          <List sx={{ overflow: "visible" }}>
            <ItemProfile />
            <ItemsSidebar items={itemsSidebar} />
          </List>
          <Divider variant="middle" />
          <Bottom>
            <QuickAccessItem />
            <Links links={dataLinks} />
          </Bottom>
        </CustomScroll>
      </Box>
    </Box>
  );
};

export default Sidebar;
