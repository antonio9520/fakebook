import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 20%;
  max-width: 380px;
  right: 0;
  max-height: 100%;
  &:hover {
    overflow-y: auto;
  }
`;

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
  padding: 20px;
`;

export const ImagenCardGroup = styled.img`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`;

export const styleContainerCard = {
  bgcolor: "background.default",
  padding: "10px 15px",
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
  color: "text.primary",
};

export const styleHeaderCardGroup = {
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

export const styleContainerDescription = {
  "& > h4": {
    fontWeight: 600,
  },
  "& > h5": {
    fontWeight: 200,
    fontSize: "12px",
  },
};

export const styleButtonCardGroup = {
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
