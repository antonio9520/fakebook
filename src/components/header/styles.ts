import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const CustomIconButton = styledMui(IconButton)<{
  mode: string;
  lightGrey: string;
  grey: string;
}>(({ mode, lightGrey, grey }) => ({
  color: mode === "light" ? "#000" : lightGrey,
  backgroundColor: grey,
  marginLeft: 8,
  "&:hover": {
    backgroundColor: mode === "light" ? "#D8DADF" : "",
  },
}));

export const stylesIcon = {
  width: 28,
  height: 28,
};

export const stylesTabs = {
  "& .MuiTabs-indicator": {
    height: 4,
    borderRadius: 15,
  },
  "&:hover .Mui-selected": {
    backgroundColor: "inherit",
  },
};

export const styleContainer: any = {
  display: "flex",
  padding: "0 20px",
  justifyContent: "space-between",
  position: "sticky",
  bgcolor: "background.default",
  color: "text.primary",
  top: 0,
  boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 0.75)",
  zIndex: 99,
  height: "56px",
};

export const stylesTab = {
  width: 110,
  marginTop: 0.5,
  marginLeft: 1,
  marginRight: 1,
  marginBottom: 0.5,
  borderRadius: 2,
  height: 45,
  "&:hover": {
    backgroundColor: "primary.grey",
  },
};

export const styleHeaderLeft = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: 1,
};


export const Logo = styled.img`
  height: 40px;
`;



export const styleHeaderInfo = {
  display: "flex",
  alignItems: "center",
  padding: "5px 5px",
  borderRadius: 20,
  "& > h5": {
    padding: "0 5px",
  },
  "&:hover": {
    backgroundColor: "primary.grey",
    cursor: "pointer",
  },
};

export const styleIconButton: any = {
  width: 40,
};
export const HeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
`;

export const styleHeaderRight = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  justifyContent: "flex-end",
};
