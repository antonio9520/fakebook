import styled from "styled-components";

export const CustomScroll = styled.div`
  &:hover {
    overflow-y: auto;
    overflow-x: hidden;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 10px;
  }

  max-height: calc(100vh - 55px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const styleContainer: any = {
  position: "fixed",
  width: "20%",
  maxHeight: "100%",
  paddingBottom: "60px",
  color: "text.primary",
};

export const styleListItem: any = {
  "&:hover.MuiListItem-root": {
    background: "background.paper",
    paddingLeft: 0,
  },
  padding: 0,
  margin: 1,
  marginRight: 0,
  borderRadius: 2,

  height: 45,
  "& > div > h5": {
    marginLeft: "-10px",
    fontSize: "15px",
  },
  
};

export const UserName = styled.h4`
  margin-left: 8px;
  font-size: 15px;
`;

export const Bottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerLinks = styled.div`
  font-size: 14px;
  margin: 10px;
  margin-left: 10px;
`;

export const styleQuickAccess = {
  // backgroundColor: "red",
  // paddingLeft: "20px",
};

export const styleHeaderQuickAccess = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
  paddingLeft: "16px",
  "& > h5": {
    fontSize: 18,
    color: "#696C70",
  },
  "& .MuiButton-root": {
    display: "none",
    fontSize: "14px",
  },
  "&:hover .MuiButton-root": {
    display: "inherit",
  },
};

export const ImageQuickAccess = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 25px;
  margin-left: -10px;
`;
