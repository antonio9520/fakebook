import { SxProps } from "@mui/system";
import styled from "styled-components";

export const styleContainer: SxProps = {
  position: "fixed",
  width: { md: "34%", lg: "23%" },
  maxWidth: { md: "350px", lg: "350px" },
  right: 0,
};

export const CustomScroll = styled.div`
  &:hover::-webkit-scrollbar-thumb {
    background: #bcc0c4;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  max-height: calc(100vh - 55px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ImagenCardGroup = styled.img`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`;

export const styleContainerCard: SxProps = {
  bgcolor: "background.default",
  padding: "10px 15px",
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
  color: "text.primary",
  marginRight: 1,
};

export const styleHeaderCardGroup: SxProps = {
  display: "flex",
  height: "30px",
  alignItems: "center",
  marginBottom: "10px",
  "& > span:nth-of-type(1)": {
    fontWeight: 600,
    paddingLeft: "10px",
  },
  "& > span:nth-of-type(2)": {
    paddingLeft: "5px",
  },
};

export const styleContainerDescription: SxProps = {
  "& > h4": {
    fontWeight: 600,
  },
  "& > h5": {
    fontWeight: 200,
    fontSize: "12px",
  },
};

export const styleButtonCardGroup: SxProps = {
  backgroundColor: "background.paper",
  marginTop: "15px",
  color: "text.primary",
  fontSize: "14px",
  borderRadius: "8px",
  "&.MuiButton-text": {
    fontWeight: 600,
    textTransform: "none",
  },
};

export const IconButtonCloseCardGroup = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const styleHeaderContacts: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const styleButtonsHeaderContacts: SxProps = {
  width: "120px",
  display: "flex",
  justifyContent: "space-between",
};

export const styleDivider: SxProps = {
  marginTop: 2,
  marginBottom: 2,
};

export const styleTypoListItem: SxProps = {
  marginLeft: 2,
  color: "primary.lightGrey",
};

export const styleItemButton: SxProps = {
  borderRadius: 2,
  marginTop: 0.5,
  marginBottom: 0.5,
  paddingLeft: 1,
};

export const styleAvatar: SxProps = {
  width: "35px",
  height: "35px",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "primary.grey",
    opacity: 0.5,
  },
};

export const styleTypoTitleContact: SxProps = {
  fontWeight: 600,
  color: "primary.lightGrey",
};

export const styleContainerButtonNewMessage: SxProps = {
  position: "absolute",
  bottom: "15px",
  right: "15px",
};

export const styleButtonNewMessage: SxProps = {
  backgroundColor: "background.default",
  boxShadow: "0px 5px 7px -7px rgba(0,0,0,0.75)",
};

export const styleIconAddGroup: SxProps = {
  color: "#000",
};

export const styleContainerIconAdd: SxProps = {
  width: "35px",
  height: "35px",
  backgroundColor: "lightgrey",
  borderRadius: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styleTypoAddGroup: SxProps = {
  marginLeft: 2,
  color: "text.primary",
};
