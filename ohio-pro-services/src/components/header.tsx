import { styled, Toolbar } from "@mui/material";
import { fontWeight } from "@mui/system";
import { Link } from "gatsby-theme-material-ui";
import * as React from "react"

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    background: theme.palette.background.default,
    alignItems: 'stretch',
    paddingRight: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }));

const StyledTitle = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.h3.fontSize,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    flexGrow: 1
})) 

const StyledLink = styled(Link)(({ theme }) => ({
    color:theme.palette.text.primary,
    verticalAlign: 'middle',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.h6.fontSize,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
}))


const Header = () => {
    return (
    <StyledToolbar>
        <StyledTitle to="/">OPS</StyledTitle>
        <StyledLink to="/about">About</StyledLink>
    </StyledToolbar>
    )
}

export default Header