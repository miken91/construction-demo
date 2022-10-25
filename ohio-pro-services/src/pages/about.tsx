import * as React from "react"
import type { HeadFC } from "gatsby"
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles"
import Title from "../components/title";
import Subtitle from "../components/subtitle";

const StyledAbout = styled("p")(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.body1.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
}))

const AboutPage = () => {
    return (
        <Box p={4}>
            <Title>
                Ohio Pro Services
            </Title>
            <Subtitle>
                Where quality is the difference
            </Subtitle>
            <StyledAbout>
                Ohio Professional Services LLC has always operated under strong 
                values aimed at exceeding client needs. Our communication channels 
                are always open—our relationship with our clients begins on the first day of contact, 
                and only ends once they’re fully satisfied with our work.
            </StyledAbout>
            <StyledAbout>
            When you hire our services, you can count on us for the results you want and need.
             Get in touch today, and discover the advantage of working with Ohio Professional Services LLC.
            </StyledAbout>
        </Box>
    );
};

export default AboutPage;

export const Head: HeadFC = () => <title>Home Page</title>