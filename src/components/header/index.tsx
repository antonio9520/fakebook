import React from "react";
import {
  Logo,
  styleHeaderCenter,
  stylesIcon,
  stylesTab,
  stylesTabs,
  styleContainer,
  styleHeaderLeft,
  styleHeaderRight,
  styleHeaderInfo,
  styleIconButton,
  styleContainerInput,
} from "./styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar, Tabs, Tab, Box, useTheme, IconButton } from "@mui/material";
import { CustomInput } from "components";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();

  const { palette }: any = theme;
  const { mode, lightGrey }: any = palette;

  return (
    <Box sx={styleContainer}>
      <Box sx={styleHeaderLeft}>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <Box sx={styleContainerInput}>
          <CustomInput placeholder="Buscar en Fakebook" icon={true} />
        </Box>
      </Box>
      <Box sx={styleHeaderCenter}>
        <Tabs sx={stylesTabs} value={value} onChange={handleChange}>
          <Tab
            sx={stylesTab}
            icon={<HomeRoundedIcon sx={stylesIcon} />}
            aria-label="phone"
          />
          <Tab
            sx={stylesTab}
            icon={<StorefrontOutlinedIcon sx={stylesIcon} />}
            aria-label="favorite"
          />
          <Tab
            sx={stylesTab}
            icon={<SupervisedUserCircleOutlinedIcon sx={stylesIcon} />}
            aria-label="person"
          />
          <Tab
            sx={stylesTab}
            icon={<DashboardOutlinedIcon sx={stylesIcon} />}
            aria-label="favorite"
          />
        </Tabs>
      </Box>
      <Box sx={styleHeaderRight}>
        <Box sx={styleHeaderInfo}>
          <Avatar
            sx={{ width: 28, height: 28 }}
            src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c"
          />
          <h5>Abraham</h5>
        </Box>
        <IconButton
          sx={{
            ...styleIconButton,
            color: mode === "light" ? "#000" : lightGrey,
          }}
        >
          <AppsIcon />
        </IconButton>
        <IconButton
          sx={{
            ...styleIconButton,
            color: mode === "light" ? "#000" : lightGrey,
          }}
        >
          <ChatIcon />
        </IconButton>
        <IconButton
          sx={{
            ...styleIconButton,
            color: mode === "light" ? "#000" : lightGrey,
          }}
        >
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton
          sx={{
            ...styleIconButton,
            color: mode === "light" ? "#000" : lightGrey,
          }}
        >
          <ArrowDropDownRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
