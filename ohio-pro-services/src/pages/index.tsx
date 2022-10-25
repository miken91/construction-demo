import * as React from "react"
import type { HeadFC } from "gatsby"
import { Button, Box } from "@mui/material";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import ContactRow from "../components/contact-row";



const IndexPage = () => {
  return (
    <Box p={10}>
      <Title>
        Ohio Pro Services
      </Title>
      <Subtitle>
        Where quality is the difference
      </Subtitle>
      <ContactRow></ContactRow>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
