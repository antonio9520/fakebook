import * as React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  Icon,
  Avatar,
  Button,
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
} from "./styles";
import { List, ListItem, Divider, Link } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { itemsSidebar, Items, dataLinks, LinksProps } from "../constants";

const ItemProfile = () => {
  return (
    <ListItem sx={styleListItem}>
      <ListItemButton sx={{ height: 56 }}>
        <Avatar
          sx={{
            marginLeft: "-10px",
          }}
          src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c"
        />
        <UserName>Abraham Vidal</UserName>
      </ListItemButton>
    </ListItem>
  );
};

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
            <ListItemIcon
              sx={{
                marginLeft: "-10px",
              }}
            >
              <Icon fontSize="large">{icon}</Icon>
            </ListItemIcon>
            <h5>{title}</h5>
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem sx={styleListItem}>
        <ListItemButton sx={{ height: 56 }} onClick={openList}>
          <ListItemIcon
            sx={{
              marginLeft: "-10px",
            }}
          >
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
      {links.map((item, index) => (
        <>
          <Link key={index} href={item.url} color="inherit" underline="hover">
            {item.title}
          </Link>
          <span> · </span>
        </>
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
  );
};

export default Sidebar;
