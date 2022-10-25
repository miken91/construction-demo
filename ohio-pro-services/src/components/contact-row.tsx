import * as React from "react"
import { styled } from "@mui/material/styles"
import Contact from "./contact"
import { PageProps } from "gatsby"

const StyledContactRow = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
}))

const ContactRow = () => {
    return (
        <StyledContactRow>
            <Contact text="513-724-0080" link="tel:513-724-0080"
            />
            <Contact text="OHIOPROSERVICES@GMAIL.COM" link="mailto:OHIOPROSERVICES@GMAIL.COM"
            />
        </StyledContactRow>
    )
}

export default ContactRow