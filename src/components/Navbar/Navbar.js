import React from "react";
import styles from "./Navbar.scss";
import Logo from "../Logo";

import {
  Container,
  Flex,
  Spacer,
  Grid,
  Box,
  GridItem,
  Image,
} from "@chakra-ui/react";
function Navbar() {
  return (
    <div className="navBar">
      {/*       I want to have a logo and then I want to have */}
      <Grid templateColumns="repeat(8, 1fr)" gap={8} Width="500px">
        <GridItem colSpan={1} w="70px" h="10">
          <Logo h="20px" w="20px" />
        </GridItem>

        <GridItem colStart={2} colEnd={7} display="flex" alignItems="center">
          The only way to enjoy...
        </GridItem>
      </Grid>
    </div>
  );
}

export default Navbar;
