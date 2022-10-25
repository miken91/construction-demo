import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { Container } from "@mui/system"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../ohio-pro-services/src/components/header"
import theme from './src/gatsby-theme-material-ui-top-layout/theme'
import './global.css'

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Container>
        {element}
      </Container>
    </ThemeProvider>
  )
}