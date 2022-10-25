import { styled } from "@mui/material/styles"

const Subtitle = styled("h3")(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.h4.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    paddingBottom: theme.spacing(3)
}))

export default Subtitle