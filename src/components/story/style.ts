import { SxProps } from "@mui/system";
import styled from "styled-components";

export const styleContainer: SxProps = {
  position: "relative",
  backgroundPosition: "center center",
  backgroundSize: "105%",
  backgroundRepeat: "no-repeat",
  width: { xs: "24%", sm: "19%", md: "19%", lg: "19%", xl: "15%" },
  height: "100%",
  boxShadow: "0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
  borderRadius: "8px",
  transition: "0.2s ease-in",
  cursor: "pointer",
  overflow: "hidden",
  "&:hover": {
    backgroundSize: "107%",
  },
  "& > h5": {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "white",
    maxWidth: "50px",
  },
};

export const styleAvatar: SxProps = {
  position: "absolute",
  border: "3px solid #2e81f4",
  top: 10,
  left: 10,
};

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  &:hover {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
`;

//Card add story
export const styleContainerAddStory: SxProps = {
  position: "relative",
  width: { xs: "24%", sm: "19%", md: "19%", lg: "19%", xl: "15%" },
  height: "100%",
  boxShadow: "0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
  borderRadius: "8px",
  cursor: "pointer",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundSize: "105%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
  transition: "0.2s ease-in",
  "&:hover::after": {
    content: '""',
    opacity: 1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  "&:hover ": {
    backgroundSize: "107%",
  },
};

export const styleBottomCard: SxProps = {
  flex: 0.4,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  color: "text.primary",
  backgroundColor: "background.default",
  "& > h5": {
    width: "60px",
    textAlign: "center",
    marginBottom: "10px",
  },
};

export const styleContainerIcon: SxProps = {
  position: "absolute",
  display: "inline-block",
  padding: "4px",
  borderRadius: "50%",
  top: "-20px",
  left: "33%",
  backgroundColor: "background.default",
};
