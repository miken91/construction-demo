import { styled } from "@mui/material/styles"

const Title = styled("h1")(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.h3.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
}))

export default Title