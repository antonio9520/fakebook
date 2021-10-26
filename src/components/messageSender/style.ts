import styled from "styled-components";

export const styleContainer: any = {
  display: "flex",
  marginTop: "15px",
  flexDirection: "column",
  backgroundColor: "background.default",
  borderRadius: "8px",
  boxShadow: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
  width: "100%",
  color: "text.primary",
};

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Option = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
  color: gray;
  margin: 5px;
  & > h4 {
    margin-left: 5px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  margin: 15px;
  margin-bottom: 0;
  padding-bottom: 10px;
`;

export const ContainerInput = styled.div`
  flex: 1;
`;
