import { SxProps } from "@mui/system";
import styled from "styled-components";

export const styleContainer: SxProps = {
  flex: 2,
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

export const Container = styled.div`
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 10px;
  padding-bottom: 200px;
  max-width: 740px;
`;

export const styleContainerStoryReel: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  height: { xs: "40vw", sm: "33vw", md: "21vw", lg: "16vw", xl: "12vw" },
  maxHeight: "200px",
  padding: "10px 0",
};

export const styleContainerVideoChat: SxProps = {
  height: "70px",
  width: "100%",
  backgroundColor: "background.default",
  marginTop: "15px",
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
  display: "flex",
  alignItems: "center",
  padding: "0 15px",
};

export const styleChipVideoChat: SxProps = {
  borderRadius: "50px",
  border: "2px solid #DBE7F2",
  padding: "5px 15px",
  "&.MuiButton-text": {
    textTransform: "none",
  },
  "&:hover": {
    backgroundColor: "background.paper",
  },
};

export const styleAvatarVideoChat: SxProps = {
  marginLeft: "15px",
};
