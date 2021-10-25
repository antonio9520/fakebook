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
  padding: 20px;
`;

export const ContainerLinks = styled.div`
  font-size: 13px;
`;
