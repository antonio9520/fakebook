import React from "react";
import {
  Logo,
  HeaderCenter,
  stylesIcon,
  stylesTab,
  stylesTabs,
  styleContainer,
  styleHeaderLeft,
  styleHeaderRight,
  styleHeaderInfo,
  CustomIconButton,
} from "./styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar, Tabs, Tab, Box, useTheme } from "@mui/material";
import { CustomInput } from "components";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();

  const { palette }: any = theme;
  const {
    primary: { grey, lightGrey },
    mode,
  }: any = palette;

  return (
    <Box sx={styleContainer}>
      <Box sx={styleHeaderLeft}>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <CustomInput placeholder="Buscar en Fakebook" icon={true} />
      </Box>
      <HeaderCenter>
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
      </HeaderCenter>
      <Box sx={styleHeaderRight}>
        <Box sx={styleHeaderInfo}>
          <Avatar
            sx={{ width: 28, height: 28 }}
            src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c"
          />
          <h5>Abraham Vidal</h5>
        </Box>
        <CustomIconButton mode={mode} lightGrey={lightGrey} grey={grey}>
          <AppsIcon />
        </CustomIconButton>
        <CustomIconButton mode={mode} lightGrey={lightGrey} grey={grey}>
          <ChatIcon />
        </CustomIconButton>
        <CustomIconButton mode={mode} lightGrey={lightGrey} grey={grey}>
          <NotificationsActiveIcon />
        </CustomIconButton>
        <CustomIconButton mode={mode} lightGrey={lightGrey} grey={grey}>
          <ArrowDropDownRoundedIcon />
        </CustomIconButton>
      </Box>
    </Box>
  );
};

export default Header;
