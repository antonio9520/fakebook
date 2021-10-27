import styled from "styled-components";

export const styleContainer = {
  backgroundColor: "background.default",
  marginTop: "15px",
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0,0,0,0.75)",
};

export const styleHeader = {
  display: "flex",
  padding: "15px",
};

export const styleHeaderLeft = {
  flex: 1,
  display: "flex",
};

export const styleHeaderInfo = {
  color: "text.primary",
  marginLeft: "10px",
};

export const styleHeaderDate = {
  display: "flex",
  alignItems: "center",
  marginTop: "-5px",
};

export const styleDescription = {
  padding: "0 15px",
};

export const ImagenPost = styled.img`
  width: "100%";
  height: "100%";
  background-size: cover;
  background-repeat: no-repeat;
`;

export const styleMultimedia = {
  maxHeight: "650px",
  backgroundColor: "red",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  background: "#060607",
  marginTop: "15px",
};
