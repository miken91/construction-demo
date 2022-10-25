import * as React from "react"
import { styled } from "@mui/material/styles"
import { PageProps } from "gatsby"

const StyledContact = styled("a")(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.body2.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
}))

interface ContactProps {
    link: string
    text: string
}

const Contact = (props: ContactProps) => {
    return (
        <StyledContact href={props.link}>
            {props.text}
        </StyledContact>
    )
}

export default Contact