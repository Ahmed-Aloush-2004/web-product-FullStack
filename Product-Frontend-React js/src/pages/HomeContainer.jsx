import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Header from "../components/HomeComponents/Header";

function HomeContainer() {
  // const [isOpen, setIsOpen] = useState(true);

  // function handleToggleNavbar() {
  //   setIsOpen(!isOpen);
  // }
  return (
    <>
      <Header />
    </>
  );
}

export default HomeContainer;
// <Grid
//   templateColumns={["1fr", isOpen ? "250px 1fr" : "1fr"]}
//   height="100vh"
//   width={"100%"}
// >
//   <SideBar isOpen={isOpen} handleToggleNavbar={handleToggleNavbar} />
//   <GridItem gridColumn={["1/2", !isOpen ? "1/3" : "2/3"]} width={"100%"}>
//     <Outlet />
//   </GridItem>
// </Grid>

// <Navbar />

