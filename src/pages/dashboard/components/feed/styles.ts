import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  right: 0;
  margin-left: 25%;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 10px;
  padding-bottom: 200px;
  min-width: 970px;
`;

export const ContainerStoryReel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const styleContainerVideoChat = {
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

export const styleChipVideoChat = {
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

export const styleAvatarVideoChat = {
  marginLeft: "15px",
};
