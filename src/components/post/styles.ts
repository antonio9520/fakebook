import { SxProps } from "@mui/system";
import styled from "styled-components";

export const styleContainer: SxProps = {
  backgroundColor: "background.default",
  marginTop: 2,
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0,0,0,0.75)",
  color: "text.primary",
};

export const styleHeader: SxProps = {
  display: "flex",
  padding: 2,
};

export const styleHeaderLeft: SxProps = {
  flex: 1,
  display: "flex",
};

export const styleHeaderInfo: SxProps = {
  color: "text.primary",
  marginLeft: 1.5,
};

export const styleHeaderDate: SxProps = {
  display: "flex",
  alignItems: "center",
  marginTop: "-5px",
};

export const styleDescription: SxProps = {
  paddingLeft: 2,
  paddingRight: 2,
};

export const ImagenPost = styled.img`
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const styleMultimedia: SxProps = {
  maxHeight: "650px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  background: "#060607",
  marginTop: 2,
  "& > img": {
    width: {
      xs: "100%",
      sm: "inherit",
    },
  },
};

export const styleReactionInfo: SxProps = {
  padding: 2,
  paddingBottom: 1,
  paddingTop: 1,
  display: "flex",
  color: "primary.lightGrey",
};

export const styleReactionInfoLeft: SxProps = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  "& .MuiTypography-root": {
    marginLeft: 1,
  },
};
export const styleReactionInfoRight: SxProps = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
};

export const styleDivider: SxProps = {
  marginLeft: 2,
  marginRight: 2,
};

export const styleActionBar: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 1,
  paddingBottom: 1,
  "& .MuiButton-text": {
    textTransform: "none",
    fontWeight: 600,
    color: "text.primary",
  },
  "& .MuiButton-root": {
    width: "33%",
    "&: hover": {
      backgroundColor: "background.paper",
    },
  },
};
