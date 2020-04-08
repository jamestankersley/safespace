import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { hot } from 'react-hot-loader'

// Create a theme instance. (made this with https://in-your-saas.github.io/material-ui-theme-editor/#text-buttons)
const theme = createMuiTheme({
  "palette":{"common":{
    "black":"#000","white":"#fff"},
    "background":{"dark":"#","default":"#fafafa"},
    "primary":{"light":"rgba(255, 255, 255, 1)",
    "main":"rgba(152, 6, 6, 1)",
    "dark":"rgba(72, 72, 74, 1)",
    "contrastText":"#fff"},
    "secondary":{"light":"rgba(255, 255, 255, 1)",
    "main":"rgba(205, 166, 35, 1)",
    "dark":"rgba(86, 84, 85, 1)",
    "contrastText":"#fff"},
    "error":{"light":"#e57373",
    "main":"#f44336",
    "dark":"#d32f2f",
    "contrastText":"#fff"},
    "text":{"primary":"rgba(0, 0, 0, 0.87)",
    "secondary":"rgba(0, 0, 0, 0.54)",
    "disabled":"rgba(0, 0, 0, 0.38)",
    "hint":"rgba(0, 0, 0, 0.38)"}}})


const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
