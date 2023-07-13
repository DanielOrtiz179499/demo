import React from 'react'
import { Container, Button, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { BrowserRouter, Link } from 'react-router-dom'
import { AppRouter } from './router'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <BrowserRouter>
        <AppRouter />
        <Typography variant="h4" className={classes.title}>
          Welcome to My App
        </Typography>
        <Button
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Go to Home
        </Button>
      </BrowserRouter>
    </Container>
  )
}

export default App
