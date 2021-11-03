import { SxProps } from "@mui/system";
import styled from "styled-components";

export const styleContainer: SxProps = {
  backgroundColor: "background.paper",
  // backgroundColor: {
  //   xs: "red", //0
  //   sm: "green",//600
  //   md: "blue",//900
  //   lg: "yellow",//1200
  //   xl: "pink",//1536
  // },
};

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
`;
