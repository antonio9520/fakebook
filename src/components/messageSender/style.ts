import styled from "styled-components";

export const styleContainer: any = {
  display: "flex",
  marginTop: 2,
  flexDirection: "column",
  backgroundColor: "background.default",
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
  width: "100%",
  color: "text.primary",
  padding: 2,
  paddingBottom: 1,
  paddingTop: 1.5,
};

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const styleOption = {
  display: "flex",
  alignItems: "center",
  color: "primary.lightGrey",
  borderRadius: "8px",
  marginTop: 1,
  flex: 1,
  "&.MuiButton-text": {
    textTransform: "none",
    fontWeight: 600,
    color: "primary.lightGrey",
    fontSize: 15,
  },
  "&:hover": {
    backgroundColor: "background.paper",
  },
};

export const ContainerTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  margin-bottom: 0;
  padding-bottom: 10px;
`;

export const ContainerInput = styled.div`
  flex: 1;
`;
