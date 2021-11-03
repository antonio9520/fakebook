import { SxProps } from "@mui/system";
import styled from "styled-components";

export const stylesIcon: SxProps = {
  width: 28,
  height: 28,
};

export const stylesTabs: SxProps = {
  "& .MuiTabs-indicator": {
    height: 4,
    borderRadius: 15,
  },
  "&:hover .Mui-selected": {
    backgroundColor: "inherit",
  },
};

export const styleContainer: SxProps = {
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
  overflow: "hidden",
};

export const stylesTab: SxProps = {
  marginTop: 0.5,
  marginLeft: { sm: 0.1, md: 1 },
  marginRight: { sm: 0.1, md: 1 },
  marginBottom: 0.5,
  borderRadius: 2,
  height: 45,
  "&:hover": {
    backgroundColor: "primary.grey",
  },
  minWidth: { sm: "8vw", md: 90 },
};

export const styleHeaderLeft: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: 1,
};

export const Logo = styled.img`
  height: 40px;
`;

export const styleHeaderInfo: SxProps = {
  display: { xs: "none", lg: "flex" },
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

export const styleIconButton: SxProps = {
  backgroundColor: "primary.grey",
  marginLeft: 2,
  "&:hover": {
    backgroundColor: "background.paper",
  },
};
export const styleHeaderCenter: SxProps = {
  display: { xs: "none", sm: "flex" },
  justifyContent: "center",
  flex: 2,
};

export const styleHeaderRight: SxProps = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  justifyContent: "flex-end",
};

export const styleContainerInput: SxProps = {
  width: { xs: 52, lg: 255 },
  transition: "0.5s all ease-in",
};
