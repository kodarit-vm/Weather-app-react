import React from 'react'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Faster One',
      'cursive'
    ].join(',')
  }
})

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography> sää </Typography>
    </ThemeProvider>
  )
}

export default Header