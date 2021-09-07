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

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    fontSize: 50,
    textTransform: 'uppercase',
    backgroundColor: '#232529',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Typography className={classes.header}> sää </Typography>
    </ThemeProvider>
  )
}

export default Header