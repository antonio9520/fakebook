import React from "react";
import {
  Container,
  Logo,
  HeaderLeft,
  Input,
  HeaderInput,
  HeaderCenter,
  HeaderRight,
  HeaderInfo,
  stylesIcon,
  stylesTab,
  stylesTabs,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, IconButton, Tabs, Tab } from "@mui/material";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container>
      <HeaderLeft>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <HeaderInput>
          <SearchIcon />
          <Input placeholder="Search Facebook" type="text" />
        </HeaderInput>
      </HeaderLeft>
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
      <HeaderRight className="header__right">
        <HeaderInfo>
          <Avatar />
          <h4>Abraham Vidal</h4>
        </HeaderInfo>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </HeaderRight>
    </Container>
  );
};

export default Header;
