import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-position: center center;
  background-size: 105%;
  background-repeat: no-repeat;
  width: 15.9%;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  transition: 0.2s ease-in;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-size: 107%;
  }
  & > h5 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    max-width: 50px;
  }
`;

export const styleAvatar: any = {
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
export const ContainerAddStory = styled.div`
  position: relative;
  width: 15.9%;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover::after {
    content: "";
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:hover .img-add-story {
    background-size: 125%;
    transition: 0.5s;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  flex: 1;
  background-size: 105%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: 0.5s;
`;

export const styleBottomCard: any = {
  flex: 0.5,
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

export const styleContainerIcon: any = {
  position: "absolute",
  display: "inline-block",
  padding: "4px",
  borderRadius: "50%",
  top: "-20px",
  left: "33%",
  backgroundColor: "background.default",
};
