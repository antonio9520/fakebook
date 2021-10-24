import * as React from "react";
import { Box } from "@mui/material";
import { Feed, RightColumn, Sidebar } from "./components";
import { styleContainer, Container } from "./styles";

const Dashboard = () => {
  return (
    <Box sx={styleContainer}>
      <Container>
        <Sidebar />
        <Feed />
        <RightColumn />
      </Container>
    </Box>
  );
};

export default Dashboard;
