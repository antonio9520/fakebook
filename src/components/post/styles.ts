import styled from "styled-components";

export const styleContainer = {
  backgroundColor: "background.default",
  marginTop: 2,
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0,0,0,0.75)",
  color: "text.primary",
};

export const styleHeader = {
  display: "flex",
  padding: 2,
};

export const styleHeaderLeft = {
  flex: 1,
  display: "flex",
};

export const styleHeaderInfo = {
  color: "text.primary",
  marginLeft: 1.5,
};

export const styleHeaderDate = {
  display: "flex",
  alignItems: "center",
  marginTop: "-5px",
};

export const styleDescription = {
  paddingLeft: 2,
  paddingRight: 2,
};

export const ImagenPost = styled.img`
  width: "100%";
  height: "100%";
  background-size: cover;
  background-repeat: no-repeat;
`;

export const styleMultimedia = {
  maxHeight: "650px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  background: "#060607",
  marginTop: 2,
};

export const styleReactionInfo = {
  padding: 2,
  paddingBottom: 1,
  paddingTop: 1,
  display: "flex",
  color: "primary.lightGrey",
};

export const styleReactionInfoLeft = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  "& .MuiTypography-root": {
    marginLeft: 1,
  },
};
export const styleReactionInfoRight = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
};

export const styleDivider = {
  marginLeft: 2,
  marginRight: 2,
};

export const styleActionBar = {
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
    paddingLeft: 8,
    paddingRight: 8,
    "&: hover": {
      backgroundColor: "background.paper",
    },
  },
};
